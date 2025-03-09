"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '@/app/contexts/AuthContext';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm<LoginFormData>();
  const { login, loading } = useAuthContext();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
    } catch {
      setError('password', {
        type: 'manual',
        message: 'Invalid email or password',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginPage;
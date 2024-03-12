'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormEvent, useState } from 'react';
import { supabase } from '@/app/config/supabaseClient';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function InputWithButton() {
  const [email, setEmail] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(email);

    const { data, error } = await supabase.from('email').insert([
      {
        email,
      },
    ]);

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }

    setEmail('');
  };

  const showToast = () => {
    toast.success('Thanks for signing up!');
  };

  return (
    <div className='flex w-full max-w-sm items-center space-x-2 mb-6'>
      <form
        method='POST'
        onSubmit={onSubmit}
        className='flex w-full max-w-sm items-center space-x-2'
      >
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          id='email'
          autoComplete='email'
          type='email'
          placeholder='Email'
          required
          className='bg-transparent text-white placeholder:text-gray-500 focus:outline-none ring-offset-[#44506b] focus-visible:ring-offset-1 border-2 border-[#44506b]'
        />
        <Button
          type='submit'
          onClick={showToast}
          className='bg-[#44506b] text-white hover:bg-[#333f5c]'
        >
          Get Updates
        </Button>
      </form>
    </div>
  );
}

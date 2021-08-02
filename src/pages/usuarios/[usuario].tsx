import { useRouter } from 'next/router';
import React from 'react';

const Usuario = () => {
  const router = useRouter();

  return <h1>Usuario: {router.query.usuario}</h1>;
};

export default Usuario;

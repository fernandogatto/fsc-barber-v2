/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"], // Adiciona o domínio da imagem
    unoptimized: true, // Desativa a otimização de imagens
  },
}

export default nextConfig

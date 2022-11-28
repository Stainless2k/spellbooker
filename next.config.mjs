/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

const basePath = process.env.NODE_ENV === 'production' ? '/spellbooker' : undefined;

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['cards.scryfall.io'], unoptimized: true },
  experimental: { images: { allowFutureImage: true, unoptimized: true } },
  basePath
});

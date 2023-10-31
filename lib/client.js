import  { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'rubfbi1f',
  dataset: 'production',
  apiVersion: '2023-10-20',
  useCdn: true,
  token: 'skhWbwntQK7ipohj5APk5whhIxdyaX0wFMb6iBZEP33ACzObZvbnVm2EXrdr3BYgrWs0OvHCfdDeNKxIBiKd7y685poh7J0d2wTsn9c3gDKiKp4PBCOxE6EFgW8cvbWklsyKUZdE8j6zHjAxb8EmYzV7iMD7jCcLutIerkbqvFaIWv1cMbyW'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
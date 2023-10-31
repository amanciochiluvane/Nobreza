export default {
    name: 'brincos',
    title: 'Brincos',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'nome',
            title: 'Nome',
            type: 'string',
            
        },
        
        {
            name: 'preco',
            title: 'Preco',
            type: 'number', 
        }
        
    ],
    };
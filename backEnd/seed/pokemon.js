const db = require('../db')
const { pokeType, Pokemon } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const bug = await new pokeType({
        name: bug,
        weaknesses: [fire, flying, rock]
    })
    bug.save();
    
    const dragon = await new pokeType({
        name: dragon,
        weaknesses: [ice, dragon]
    })
    dragon.save();
    
    const electric = await new pokeType({
        name: electric,
        weaknesses: [ground]
    })
    electric.save();
    
    const fighting = await new pokeType({
        name: fighting,
        weaknesses: [flying, psychic]
    })
    figting.save();
    
    const fire = await new pokeType({
        name: fire,
        weaknesses: [water, ground, rock]
    })
    fire.save();

    const flying = await new pokeType({
        name: flying,
        weaknesses: [electric, ice, rock]
    })
    flying.save();

    const ghost = await new pokeType({
        name: ghost,
        weaknesses: [ghost]
    })
    ghost.save();

    const grass = await new pokeType({
        name: grass,
        weaknesses: [fire, ice, poison, flying, bug]
    })
    grass.save();

    const ground = await new pokeType({
        name: ground,
        weaknesses: [water, grass, ice]
    })
    ground.save();

    const ice = await new pokeType({
        name: ice,
        weaknesses: [fire, fighting, rock]
    })
    ice.save();

    const normal = await new pokeType({
        name: normal,
        weaknesses: [fighting]
    })
    normal.save();

    const poison = await new pokeType({
        name: poison,
        weaknesses: [ground, psychic]
    })
    poison.save();

    const psychic = await new pokeType({
        name: psychic,
        weaknesses: [bug, ghost]
    })
    psychic.save();

    const rock = await new pokeType({
        name: rock,
        weaknesses: [water, grass, fighting, ground]
    })
    rock.save();

    const water = await new pokeType({
        name: water,
        weaknesses: [electric, grass]
    })
    water.save();
}

const pokemon = [
    {
        num: '001',
        name: 'Bulbasaur',
        img: 'https://pngset.com/images/bulbasaur-is-a-grass-type-pokemon-its-pokemon-bulbasaur-plant-graphics-art-tree-transparent-png-2617703.png',
        height: '0.71m',
        weight: '6.90kg',
        type: ['grass', 'poison'],
        weaknesses: ['fire', 'ice', 'flying', 'psychic', 'bug']
    },
    {
        num: '002',
        name: 'Ivysaur',
        img: 'https://pngset.com/images/pokemon-y-ivysaur-by-smiley-fakemon-d70i6v4-ivysaur-dragon-leaf-plant-transparent-png-516642.png',
        height: '0.99m',
        weight: '13.00kg',
        type: ['grass', 'poison'],
        weaknesses: ['fire', 'ice', 'flying', 'psychic', 'bug']
    },
    {
        num: '003',
        name: 'Venusaur',
        img: 'https://mpng.subpng.com/20181116/rra/kisspng-venusaur-bulbasaur-ivysaur-charizard-video-games-pokemon-iniciales-iii1generacin-5beed2e007e5c5.6628132815423782080324.jpg',
        height: '2.01m',
        weight: '100.00kg',
        type: ['grass', 'poison'],
        weaknesses: ['fire', 'ice', 'flying', 'psychic', 'bug']
    },
    {
        num: '004',
        name: 'Charmander',
        img: 'https://w7.pngwing.com/pngs/682/371/png-transparent-ash-ketchum-pokemon-go-pokemon-ultra-sun-and-ultra-moon-charmander-poketmon-mammal-orange-vertebrate.png',
        height: '0.61m',
        weight: '8.50kg',
        type: 'fire',
        weaknesses: ['water', 'ground', 'rock']
    },
    {
        num: '005',
        name: 'Charmeleon',
        img: 'https://img.favpng.com/5/13/13/pok-mon-red-and-blue-charmeleon-charmander-charizard-evolution-png-favpng-xMEYtYe2BuAAK26cuctzn8fej_t.jpg',
        height: '1.09m',
        weight: '19.00kg',
        type: 'fire',
        weaknesses: ['water', 'ground', 'rock']
    },
    {
        num: '006',
        name: 'Charizard',
        img: 'https://pngset.com/images/charizard-pokemon-charizard-pokemon-dragon-transparent-png-930651.png',
        height: '1.70m',
        weight: '90.50kg',
        type: 'fire',
        weaknesses: ['water', 'ground', 'rock']
    },
    {
        num: '007',
        name: 'Squirtle',
        img: 'https://www.pinclipart.com/picdir/middle/570-5700657_collection-of-free-squirtle-transparent-character-pokemon-transparent.png',
        height: '0.51m',
        weight: '9.00kg',
        type: 'water',
        weaknesses: ['electric', 'grass']
    },
    {
        num: '008',
        name: 'Wartortle',
        img: 'https://pngset.com/images/wartortle-pokemon-character-vector-art-squirtle-wartortle-blastoise-animal-mammal-wildlife-figurine-transparent-png-1260572.png',
        height: '0.99m',
        weight: '22.50kg',
        type: 'water',
        weaknesses: ['electric', 'grass']
    },
    {
        num: '009',
        name: 'Blastoise',
        img: 'https://www.pngfind.com/pngs/m/18-182140_blastoise-png-pokemon-blastoise-transparent-png.png',
        height: '1.60m',
        weight: '85.50kg',
        type: 'water',
        weaknesses: ['electric', 'grass']
    },
    {
        num: '010',
        name: 'Caterpie',
        img: 'https://www.pinclipart.com/picdir/middle/65-653246_pokeball-clipart-transparent-background-caterpie-pokemon-png-download.png',
        height: '0.30m',
        weight: '2.90kg',
        type: 'bug',
        weaknesses: ['fire', 'flying', 'rock']
    },
    {
        num: '011',
        name: 'Metapod',
        img: 'https://w7.pngwing.com/pngs/14/309/png-transparent-ash-ketchum-pokemon-diamond-and-pearl-metapod-caterpie-censurado-vertebrate-fauna-fictional-character.png',
        height: '0.71m',
        weight: '9.90kg',
        type: 'bug',
        weaknesses: ['fire', 'flying', 'rock']
    },
    {
        num: '012',
        name: 'Butterfree',
        img: 'https://cdn.imgbin.com/13/20/18/imgbin-pok-mon-x-and-y-pok-mon-go-butterfree-ash-ketchum-pokemon-go-YAZ6LzVY9pmk6piZJQxEHcy9R.jpg',
        height: '1.09m',
        weight: '32.00kg',
        type: 'bug',
        weaknesses: ['fire', 'flying', 'rock', 'ice', 'electric']
    },
    {
        num: '013',
        name: 'Weedle',
        img: 'https://w7.pngwing.com/pngs/292/140/png-transparent-weedle-pokemon-black-white-pokemon-go-kakuna-others-food-carnivoran-dog-like-mammal.png',
        height: '0.30m',
        weight: '3.20kg',
        type: ['bug', 'poison'],
        weaknesses: ['fire', 'flying', 'psychic', 'rock']
    },
    {
        num: '014',
        name: 'Kakuna',
        img: 'https://w7.pngwing.com/pngs/923/910/png-transparent-pokemon-platinum-kakuna-beedrill-pokedex-kakuna.png',
        height: '0.61m',
        weight: '10.00kg',
        type: ['bug', 'poison'],
        weaknesses: ['fire', 'flying', 'psychic', 'rock']
    },
    {
        num: '015',
        name: 'Beedrill',
        img: 'https://www.clipartmax.com/png/middle/72-720546_beedrill-pokemon-character-vector-art-pokemon-beedrill.png',
        height: '0.99m',
        weight: '29.50kg',
        type: ['bug', 'poison'],
        weaknesses: ['fire', 'flying', 'psychic', 'rock']
    },
    {
        num: '016',
        name: 'Pidgey',
        img: 'https://pngset.com/images/download-pidgey-pokemon-character-pidgey-dream-world-bird-animal-cardinal-transparent-png-2836759.png',
        height: '0.30m',
        weight: '1.80kg',
        type: ['normal', 'flying'],
        weaknesses: ['electric', 'rock']
    },
    {
        num: '017',
        name: 'Pidgeotto',
        img: 'https://www.pngfind.com/pngs/m/560-5608851_pidgeotto-png-transparent-png.png',
        height: '1.09m',
        weight: '30.00kg',
        type: ['normal', 'flying'],
        weaknesses: ['electric', 'rock']
    },
    {
        num: '018',
        name: 'Pidgeot',
        img: 'https://w7.pngwing.com/pngs/983/895/png-transparent-ash-ketchum-pidgeotto-pokemon-desktop-pokemon-chicken-galliformes-vertebrate.png',
        height: '1.50m',
        weight: '39.50kg',
        type: ['normal', 'flying'],
        weaknesses: ['electric', 'rock']
    },
    {
        num: '019',
        name: 'Rattata',
        img: 'https://e7.pngegg.com/pngimages/149/1019/png-clipart-rattata-raticate-pokemon-go-pokedex-others-purple-mammal.png',
        height: '0.03m',
        weight: '3.50kg',
        type: 'normal',
        weaknesses: 'fighting'
    },
    {
        num: '020',
        name: 'Raticate',
        img: 'https://cdn.imgbin.com/22/8/21/imgbin-raticate-rattata-pok-mon-sun-and-moon-others-NHn7Ai32HU0ANmdBY7PMw90qc.jpg',
        height: '0.71m',
        weight: '18.50kg',
        type: 'normal',
        weaknesses: 'fighting'
    },
    {
        num: '021',
        name: 'Spearow',
        img: 'https://w7.pngwing.com/pngs/58/778/png-transparent-pokemon-red-and-blue-pokemon-battle-revolution-fearow-spearow-others-chicken-galliformes-video-game.png',
        height: '0.30m',
        weight: '2.00kg',
        type: ['normal', 'flying'],
        weaknesses: ['electric', 'rock']
    },
    {
        num: '022',
        name: 'Fearow',
        img: 'https://w7.pngwing.com/pngs/771/593/png-transparent-pokemon-gold-and-silver-pokemon-firered-and-leafgreen-pokemon-crystal-pokemon-red-and-blue-fearow-spearow-chicken-galliformes-fauna.png',
        height: '1.19m',
        weight: '38.00kg',
        type: ['normal', 'flying'],
        weaknesses: ['electric', 'rock']
    },
    {
        num: '023',
        name: 'Ekans',
        img: 'https://www.pngfind.com/pngs/m/619-6192003_ekans-pokemon-ekans-png-transparent-png.png',
        height: '2.01m',
        weight: '6.90kg',
        type: 'poison',
        weaknesses: ['ground', 'psychic']
    },
    {
        num: '024',
        name: 'Arbok',
        img: 'https://www.nicepng.com/png/detail/48-485312_arbok-pokemon-arbok.png',
        height: '3.51m',
        weight: '65.00kg',
        type: 'poison',
        weaknesses: ['ground', 'psychic']
    },
    {
        num: '025',
        name: 'Pikachu',
        img: 'https://w7.pngwing.com/pngs/585/436/png-transparent-pokemon-pikachu-illustration-icon-pikachu-background-mammal-food-vertebrate.png',
        height: '0.41m',
        weight: '6.00kg',
        type: 'electric',
        weaknesses: 'ground'
    },
    {
        num: '026',
        name: 'Raichu',
        img: 'https://cdn.imgbin.com/14/4/3/imgbin-pikachu-pok-mon-adventures-pok-mon-go-raichu-pikachu-yR9SGHirzJar4vyqjBTbdYY78.jpg',
        height: '0.79m',
        weight: '30.00kg',
        type: 'electric',
        weaknesses: 'ground'
    },
    {
        num: '027',
        name: 'Sandshrew',
        img: 'https://w7.pngwing.com/pngs/91/1001/png-transparent-pokemon-go-pokemon-x-and-y-sandshrew-sandslash-pokemon-mammal-cat-like-mammal-carnivoran-thumbnail.png',
        height: '0.61m',
        weight: '12.00kg',
        type: 'ground',
        weaknesses: ['water', 'grass', 'ice']
    },
    {
        num: '028',
        name: 'Sanslash',
        img: 'https://w7.pngwing.com/pngs/350/51/png-transparent-pokemon-x-and-y-pokemon-firered-and-leafgreen-pokemon-go-sandslash-poketmon-mammal-leaf-carnivoran.png',
        height: '0.99m',
        weight: '29.50kg',
        type: 'ground',
        weaknesses: ['water', 'grass', 'ice']
    },
    {
        num: '029',
        name: 'Nidoran ♀ (Female)',
        img: 'https://www.clipartmax.com/png/middle/261-2611704_nidoran-pokemon-female-character-vector-art-nidoran-female-dream-world.png',
        height: '0.41m',
        weight: '7.00kg',
        type: 'poison',
        weaknesses: ['ground', 'psychic']
    },
    {
        num: '030',
        name: 'Nidorina',
        img: 'https://www.clipartmax.com/png/middle/145-1450324_pokemon-pokemon-nidorina.png',
        height: '0.79m',
        weight: '20.00kg',
        type: 'poison',
        weaknesses: ['ground', 'psychic']
    },
    {
        num: '031',
        name: 'Nidoqueen',
        img: 'https://www.pikpng.com/pngl/m/499-4992088_nidoqueen-png-pokemon-drawing-of-nidoqueen-clipart.png',
        height: '1.30m',
        weight: '60.00kg',
        type: 'poison',
        weaknesses: ['ground', 'psychic', 'water', 'ice']
    },
    {
        num: '032',
        name: 'Nidoran ♂ (Male)',
        img: 'https://www.pngitem.com/pimgs/m/396-3963499_nidoran-male-hd-png-download.png',
        height: '0.51m',
        weight: '9.00kg',
        type: 'poison',
        weaknesses: ['ground', 'psychic']
    },
    {
        num: '033',
        name: 'Nidorino',
        img: 'https://pngset.com/images/nidorino-full-hd-pictures-pokemon-nidorino-dragon-transparent-png-2987854.png',
        height: '0.89m',
        weight: '19.50kg',
        type: 'poison',
        weaknesses: ['ground', 'psychic']
    },
    {
        num: '034',
        name: 'Nidoking',
        img: 'https://w7.pngwing.com/pngs/579/633/png-transparent-pokemon-go-pokemon-battle-revolution-pokemon-firered-and-leafgreen-pokemon-red-and-blue-pokemon-heartgold-and-soulsilver-takeo-strong-purple-dragon-violet-thumbnail.png',
        height: '1.40m',
        weight: '62.00kg',
        type: 'poison',
        weaknesses: ['ground', 'psychic', 'water', 'ice']
    },
    {
        num: '035',
        name: 'Clefairy',
        img: 'https://e7.pngegg.com/pngimages/788/770/png-clipart-clefairy-pokemon-clefable-pikachu-jigglypuff-reluctant-dragon-white-mammal.png',
        height: '0.61m',
        weight: '7.50kg',
        type: 'normal',
        weaknesses: 'fighting'
    },
    {
        num: '036',
        name: 'Clefable',
        img: 'https://w7.pngwing.com/pngs/581/515/png-transparent-pokemon-x-and-y-pokemon-go-pikachu-clefable-pikachu-white-mammal-cat-like-mammal.png',
        height: '1.30m',
        weight: '40.00kg',
        type: 'normal',
        weaknesses: 'fighting'
    },
    {
        num: '037',
        name: 'Vulpix',
        img: 'https://w7.pngwing.com/pngs/659/556/png-transparent-cat-pikachu-vulpix-pokemon-cat-horse-mammal-animals-thumbnail.png',
        height: '0.61m',
        weight: '9.90kg',
        type: 'fire',
        weaknesses: ['water', 'ground', 'rock']
    },
    {
        num: '038',
        name: 'Ninetails',
        img: 'https://e7.pngegg.com/pngimages/814/97/png-clipart-pokemon-go-ninetales-pokemon-mystery-dungeon-explorers-of-darkness-time-vulpix-pokemon-go-chicken-flower.png',
        height: '1.09m',
        weight: '19.90kg',
        type: 'fire',
        weaknesses: ['water', 'ground', 'rock']
    },
    {
        num: '039',
        name: 'Jigglypuff',
        img: 'http://assets.stickpng.com/images/585961604f6ae202fedf285a.png',
        height: '0.51m',
        weight: '5.50kg',
        type: 'normal',
        weaknesses: 'fighting'
    },
    {
        num: '040',
        name: 'Wigglytuff',
        img: 'https://archives.bulbagarden.net/media/upload/thumb/9/92/040Wigglytuff.png/250px-040Wigglytuff.png',
        height: '0.99m',
        weight: '12.00kg',
        type: 'normal',
        weaknesses: 'fighting'
    },
]
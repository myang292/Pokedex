const db = require('../db')
const { Poketype, Pokemon } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const bug = await new Poketype({
        name: 'bug',
        weaknesses: ['fire', 'flying', 'rock']
    })
    bug.save();
    
    const dragon = await new Poketype({
        name: 'dragon',
        weaknesses: ['ice', 'dragon']
    })
    dragon.save();
    
    const electric = await new Poketype({
        name: 'electric',
        weaknesses: ['ground']
    })
    electric.save();
    
    const fighting = await new Poketype({
        name: 'fighting',
        weaknesses: ['flying', 'psychic']
    })
    fighting.save();
    
    const fire = await new Poketype({
        name: 'fire',
        weaknesses: ['water', 'ground', 'rock']
    })
    fire.save();

    const flying = await new Poketype({
        name: 'flying',
        weaknesses: ['electric', 'ice', 'rock']
    })
    flying.save();

    const ghost = await new Poketype({
        name: 'ghost',
        weaknesses: ['ghost']
    })
    ghost.save();

    const grass = await new Poketype({
        name: 'grass',
        weaknesses: ['fire', 'ice', 'poison', 'flying', 'bug']
    })
    grass.save();

    const ground = await new Poketype({
        name: 'ground',
        weaknesses: ['water', 'grass', 'ice']
    })
    ground.save();

    const ice = await new Poketype({
        name: 'ice',
        weaknesses: ['fire', 'fighting', 'rock']
    })
    ice.save();

    const normal = await new Poketype({
        name: 'normal',
        weaknesses: ['fighting']
    })
    normal.save();

    const poison = await new Poketype({
        name: 'poison',
        weaknesses: ['ground', 'psychic']
    })
    poison.save();

    const psychic = await new Poketype({
        name: 'psychic',
        weaknesses: ['bug', 'ghost']
    })
    psychic.save();

    const rock = await new Poketype({
        name: 'rock',
        weaknesses: ['water', 'grass', 'fighting', 'ground']
    })
    rock.save();

    const water = await new Poketype({
        name: 'water',
        weaknesses: ['electric', 'grass']
    })
    water.save();


    async () => {
    const Bulbasaur = await new Pokemon({
        num: '001',
        name: 'Bulbasaur',
        img: 'https://pngset.com/images/bulbasaur-is-a-grass-type-pokemon-its-pokemon-bulbasaur-plant-graphics-art-tree-transparent-png-2617703.png',
        height: '0.71m',
        weight: '6.90kg',
        type: [grass.name, poison.name],
        weaknesses: [fire.name, ice.name, flying.name, psychic.name, bug.name]
    })
    Bulbasaur.save()

    const Ivysaur = await new Pokemon({
        num: '002',
        name: 'Ivysaur',
        img: 'https://pngset.com/images/pokemon-y-ivysaur-by-smiley-fakemon-d70i6v4-ivysaur-dragon-leaf-plant-transparent-png-516642.png',
        height: '0.99m',
        weight: '13.00kg',
        type: [grass.name, poison.name],
        weaknesses: [fire.name, ice.name, flying.name, psychic.name, bug.name]
    })
    Ivysaur.save()

    const Venusar = await new Pokemon({
        num: '003',
        name: 'Venusaur',
        img: 'https://mpng.subpng.com/20181116/rra/kisspng-venusaur-bulbasaur-ivysaur-charizard-video-games-pokemon-iniciales-iii1generacin-5beed2e007e5c5.6628132815423782080324.jpg',
        height: '2.01m',
        weight: '100.00kg',
        type: [grass.name, poison.name],
        weaknesses: [fire.name, ice.name, flying.name, psychic.name, bug.name]
    })
    Venusaur.save()

    const Charmander = await new Pokemon({
        num: '004',
        name: 'Charmander',
        img: 'https://w7.pngwing.com/pngs/682/371/png-transparent-ash-ketchum-pokemon-go-pokemon-ultra-sun-and-ultra-moon-charmander-poketmon-mammal-orange-vertebrate.png',
        height: '0.61m',
        weight: '8.50kg',
        type: fire.name,
        weaknesses: [water.name, ground.name, rock.name]
    }) 
    Charmander.save()

    const Charmeleon = await new Pokemon({
        num: '005',
        name: 'Charmeleon',
        img: 'https://img.favpng.com/5/13/13/pok-mon-red-and-blue-charmeleon-charmander-charizard-evolution-png-favpng-xMEYtYe2BuAAK26cuctzn8fej_t.jpg',
        height: '1.09m',
        weight: '19.00kg',
        type: fire.name,
        weaknesses: [water.name, ground.name, rock.name]
    })
    Charmeleon.save()

    const Charizard = await new Pokemon({
        num: '006',
        name: 'Charizard',
        img: 'https://pngset.com/images/charizard-pokemon-charizard-pokemon-dragon-transparent-png-930651.png',
        height: '1.70m',
        weight: '90.50kg',
        type: fire.name,
        weaknesses: [water.name, ground.name, rock.name]
    }) 
    Charizard.save()

    const Squirtle = await new Pokemon({
        num: '007',
        name: 'Squirtle',
        img: 'https://www.pinclipart.com/picdir/middle/570-5700657_collection-of-free-squirtle-transparent-character-pokemon-transparent.png',
        height: '0.51m',
        weight: '9.00kg',
        type: water.name,
        weaknesses: [electric.name, grass.name]
    }) 
    Squirtle.save()

    const Wartortle = await new Pokemon({
        num: '008',
        name: 'Wartortle',
        img: 'https://pngset.com/images/wartortle-pokemon-character-vector-art-squirtle-wartortle-blastoise-animal-mammal-wildlife-figurine-transparent-png-1260572.png',
        height: '0.99m',
        weight: '22.50kg',
        type: water.name,
        weaknesses: [electric.name, grass.name]
    }) 
    Wartortle.save()
    
    const Blastoise = await new Pokemon({
        num: '009',
        name: 'Blastoise',
        img: 'https://www.pngfind.com/pngs/m/18-182140_blastoise-png-pokemon-blastoise-transparent-png.png',
        height: '1.60m',
        weight: '85.50kg',
        type: water.name,
        weaknesses: [electric.name, grass.name]
    })
    Blastoise.save()

    const Caterpie = await new Pokemon({
        num: '010',
        name: 'Caterpie',
        img: 'https://www.pinclipart.com/picdir/middle/65-653246_pokeball-clipart-transparent-background-caterpie-pokemon-png-download.png',
        height: '0.30m',
        weight: '2.90kg',
        type: bug.name,
        weaknesses: [fire.name, flying.name, rock.name]
    })
    Caterpie.save()

    const Metapod = await new Pokemon({
        num: '011',
        name: 'Metapod',
        img: 'https://w7.pngwing.com/pngs/14/309/png-transparent-ash-ketchum-pokemon-diamond-and-pearl-metapod-caterpie-censurado-vertebrate-fauna-fictional-character.png',
        height: '0.71m',
        weight: '9.90kg',
        type: bug.name,
        weaknesses: [fire.name, flying.name, rock.name]
    })
    Metapod.save()
    
    const Butterfree = await new Pokemon({
        num: '012',
        name: 'Butterfree',
        img: 'https://cdn.imgbin.com/13/20/18/imgbin-pok-mon-x-and-y-pok-mon-go-butterfree-ash-ketchum-pokemon-go-YAZ6LzVY9pmk6piZJQxEHcy9R.jpg',
        height: '1.09m',
        weight: '32.00kg',
        type: bug.name,
        weaknesses: [fire.name, flying.name, rock.name, ice.name, electric.name]
    })
    Butterfree.save()
    
    const Weedle = await new Pokemon({
        num: '013',
        name: 'Weedle',
        img: 'https://w7.pngwing.com/pngs/292/140/png-transparent-weedle-pokemon-black-white-pokemon-go-kakuna-others-food-carnivoran-dog-like-mammal.png',
        height: '0.30m',
        weight: '3.20kg',
        type: [bug.name, poison.name],
        weaknesses: [fire.name, flying.name, psychic.name, rock.name]
    }) 
    Weedle.save()
    
    const Kakuna = await new Pokemon({
        num: '014',
        name: 'Kakuna',
        img: 'https://w7.pngwing.com/pngs/923/910/png-transparent-pokemon-platinum-kakuna-beedrill-pokedex-kakuna.png',
        height: '0.61m',
        weight: '10.00kg',
        type: [bug.name, poison.name],
        weaknesses: [fire.name, flying.name, psychic.name, rock.name]
    })
    Kakuna.save()
    
    const Beedrill = await new Pokemon({
        num: '015',
        name: 'Beedrill',
        img: 'https://www.clipartmax.com/png/middle/72-720546_beedrill-pokemon-character-vector-art-pokemon-beedrill.png',
        height: '0.99m',
        weight: '29.50kg',
        type: [bug.name, poison.name],
        weaknesses: [fire.name, flying.name, psychic.name, rock.name]
    })
    Beedrill.save()
    
    const Pidgey = await new Pokemon({
        num: '016',
        name: 'Pidgey',
        img: 'https://pngset.com/images/download-pidgey-pokemon-character-pidgey-dream-world-bird-animal-cardinal-transparent-png-2836759.png',
        height: '0.30m',
        weight: '1.80kg',
        type: [normal.name, flying.name],
        weaknesses: [electric.name, rock.name]
    })
    Pidgey.save()
    
    const Pidgeotto = await new Pokemon({
        num: '017',
        name: 'Pidgeotto',
        img: 'https://www.pngfind.com/pngs/m/560-5608851_pidgeotto-png-transparent-png.png',
        height: '1.09m',
        weight: '30.00kg',
        type: [normal.name, flying.name],
        weaknesses: [electric.name, rock.name]
    })
    Pidgeotto.save()
    
    const Pidgeot = await new Pokemon({
        num: '018',
        name: 'Pidgeot',
        img: 'https://w7.pngwing.com/pngs/983/895/png-transparent-ash-ketchum-pidgeotto-pokemon-desktop-pokemon-chicken-galliformes-vertebrate.png',
        height: '1.50m',
        weight: '39.50kg',
        type: [normal.name, flying.name],
        weaknesses: [electric.name, rock.name]
    })
    Pidgeot.save()
    
    const Rattata = await new Pokemon({
        num: '019',
        name: 'Rattata',
        img: 'https://e7.pngegg.com/pngimages/149/1019/png-clipart-rattata-raticate-pokemon-go-pokedex-others-purple-mammal.png',
        height: '0.03m',
        weight: '3.50kg',
        type: normal.name,
        weaknesses: fighting.name
    })
    Rattata.save()
    
    const Raticate = await new Pokemon({
        num: '020',
        name: 'Raticate',
        img: 'https://cdn.imgbin.com/22/8/21/imgbin-raticate-rattata-pok-mon-sun-and-moon-others-NHn7Ai32HU0ANmdBY7PMw90qc.jpg',
        height: '0.71m',
        weight: '18.50kg',
        type: normal.name,
        weaknesses: fighting.name
    })
    Raticate.save()
    
    const Spearow = await new Pokemon({
        num: '021',
        name: 'Spearow',
        img: 'https://w7.pngwing.com/pngs/58/778/png-transparent-pokemon-red-and-blue-pokemon-battle-revolution-fearow-spearow-others-chicken-galliformes-video-game.png',
        height: '0.30m',
        weight: '2.00kg',
        type: [normal.name, flying.name],
        weaknesses: [electric.name, rock.name]
    })
    Spearow.save()
    
    const Fearow = await new Pokemon({
        num: '022',
        name: 'Fearow',
        img: 'https://w7.pngwing.com/pngs/771/593/png-transparent-pokemon-gold-and-silver-pokemon-firered-and-leafgreen-pokemon-crystal-pokemon-red-and-blue-fearow-spearow-chicken-galliformes-fauna.png',
        height: '1.19m',
        weight: '38.00kg',
        type: [normal.name, flying.name],
        weaknesses: [electric.name, rock.name]
    })
    Fearow.save()
    
    const Ekans = await new Pokemon({
        num: '023',
        name: 'Ekans',
        img: 'https://www.pngfind.com/pngs/m/619-6192003_ekans-pokemon-ekans-png-transparent-png.png',
        height: '2.01m',
        weight: '6.90kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name]
    })
    Ekans.save()
    
    const Arbok = await new Pokemon({
        num: '024',
        name: 'Arbok',
        img: 'https://www.nicepng.com/png/detail/48-485312_arbok-pokemon-arbok.png',
        height: '3.51m',
        weight: '65.00kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name]
    })
    Arbok.save()
    
    const Pikachu = await new Pokemon({
        num: '025',
        name: 'Pikachu',
        img: 'https://w7.pngwing.com/pngs/585/436/png-transparent-pokemon-pikachu-illustration-icon-pikachu-background-mammal-food-vertebrate.png',
        height: '0.41m',
        weight: '6.00kg',
        type: electric.name,
        weaknesses: ground.name
    })
    Pikachu.save()
    
    const Raichu = await new Pokemon({
        num: '026',
        name: 'Raichu',
        img: 'https://cdn.imgbin.com/14/4/3/imgbin-pikachu-pok-mon-adventures-pok-mon-go-raichu-pikachu-yR9SGHirzJar4vyqjBTbdYY78.jpg',
        height: '0.79m',
        weight: '30.00kg',
        type: electric.name,
        weaknesses: ground.name
    })
    Raichu.save()
    
    const Sandshrew = await new Pokemon({
        num: '027',
        name: 'Sandshrew',
        img: 'https://w7.pngwing.com/pngs/91/1001/png-transparent-pokemon-go-pokemon-x-and-y-sandshrew-sandslash-pokemon-mammal-cat-like-mammal-carnivoran-thumbnail.png',
        height: '0.61m',
        weight: '12.00kg',
        type: ground.name,
        weaknesses: [water.name, grass.name, ice.name]
    })
    Sandshrew.save()
    
    const Sandslash = await new Pokemon({
        num: '028',
        name: 'Sandslash',
        img: 'https://w7.pngwing.com/pngs/350/51/png-transparent-pokemon-x-and-y-pokemon-firered-and-leafgreen-pokemon-go-sandslash-poketmon-mammal-leaf-carnivoran.png',
        height: '0.99m',
        weight: '29.50kg',
        type: ground.name,
        weaknesses: [water.name, grass.name, ice.name]
    })
    Sandslash.save()
    
    const NidoF = await new Pokemon({
        num: '029',
        name: 'Nidoran ♀ (Female)',
        img: 'https://www.clipartmax.com/png/middle/261-2611704_nidoran-pokemon-female-character-vector-art-nidoran-female-dream-world.png',
        height: '0.41m',
        weight: '7.00kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name]
    })
    NidoF.save()
    
    const Nidorina = await new Pokemon({
        num: '030',
        name: 'Nidorina',
        img: 'https://www.clipartmax.com/png/middle/145-1450324_pokemon-pokemon-nidorina.png',
        height: '0.79m',
        weight: '20.00kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name]
    })
    Nidorina.save()
    
    const Nidoqueen = await new Pokemon({
        num: '031',
        name: 'Nidoqueen',
        img: 'https://www.pikpng.com/pngl/m/499-4992088_nidoqueen-png-pokemon-drawing-of-nidoqueen-clipart.png',
        height: '1.30m',
        weight: '60.00kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name, water.name, ice.name]
    })
    Nidoqueen.save()
    
    const NidoM = await new Pokemon({
        num: '032',
        name: 'Nidoran ♂ (Male)',
        img: 'https://www.pngitem.com/pimgs/m/396-3963499_nidoran-male-hd-png-download.png',
        height: '0.51m',
        weight: '9.00kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name]
    })
    NidoM.save()
    
    const Nidorino = await new Pokemon({
        num: '033',
        name: 'Nidorino',
        img: 'https://pngset.com/images/nidorino-full-hd-pictures-pokemon-nidorino-dragon-transparent-png-2987854.png',
        height: '0.89m',
        weight: '19.50kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name]
    })
    Nidorino.save()
    
    const Nidoking = await new Pokemon({
        num: '034',
        name: 'Nidoking',
        img: 'https://w7.pngwing.com/pngs/579/633/png-transparent-pokemon-go-pokemon-battle-revolution-pokemon-firered-and-leafgreen-pokemon-red-and-blue-pokemon-heartgold-and-soulsilver-takeo-strong-purple-dragon-violet-thumbnail.png',
        height: '1.40m',
        weight: '62.00kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name, water.name, ice.name]
    })
    Nidoking.save()
    
    const Clefairy = await new Pokemon({
        num: '035',
        name: 'Clefairy',
        img: 'https://e7.pngegg.com/pngimages/788/770/png-clipart-clefairy-pokemon-clefable-pikachu-jigglypuff-reluctant-dragon-white-mammal.png',
        height: '0.61m',
        weight: '7.50kg',
        type: normal.name,
        weaknesses: fighting.name
    })
    Clefairy.save()
    
    const Clefable = await new Pokemon({
        num: '036',
        name: 'Clefable',
        img: 'https://w7.pngwing.com/pngs/581/515/png-transparent-pokemon-x-and-y-pokemon-go-pikachu-clefable-pikachu-white-mammal-cat-like-mammal.png',
        height: '1.30m',
        weight: '40.00kg',
        type: normal.name,
        weaknesses: fighting.name
    })
    Clefable.save()
    
    const Vulpix = await new Pokemon({
        num: '037',
        name: 'Vulpix',
        img: 'https://w7.pngwing.com/pngs/659/556/png-transparent-cat-pikachu-vulpix-pokemon-cat-horse-mammal-animals-thumbnail.png',
        height: '0.61m',
        weight: '9.90kg',
        type: fire.name,
        weaknesses: [water.name, ground.name, rock.name]
    })
    Vulpix.save()
    
    const Ninetails = await new Pokemon({
        num: '038',
        name: 'Ninetails',
        img: 'https://e7.pngegg.com/pngimages/814/97/png-clipart-pokemon-go-ninetales-pokemon-mystery-dungeon-explorers-of-darkness-time-vulpix-pokemon-go-chicken-flower.png',
        height: '1.09m',
        weight: '19.90kg',
        type: fire.name,
        weaknesses: [water.name, ground.name, rock.name]
    })
    Ninetails.save()
    
    const Jigglypuff = await new Pokemon({
        num: '039',
        name: 'Jigglypuff',
        img: 'https://i.pinimg.com/originals/30/ab/da/30abda8d8e85f015bd9c6c2db66a8c13.jpg',
        height: '0.51m',
        weight: '5.50kg',
        type: normal.name,
        weaknesses: fighting.name
    })
    Jigglypuff.save()
    
    const Wigglytuff = await new Pokemon({
        num: '040',
        name: 'Wigglytuff',
        img: 'https://e7.pngegg.com/pngimages/49/1006/png-clipart-pokemon-go-pokemon-x-and-y-wigglytuff-pokemon-mystery-dungeon-explorers-of-darkness-time-pokemon-irochi-mammal-vertebrate.png',
        height: '0.99m',
        weight: '12.00kg',
        type: normal.name,
        weaknesses: fighting.name
    })
    Wigglytuff.save()

    await Pokemon.insertMany(pokemon)
    console.log('Pokemon are here')
}}

const run = async () => {
    await main()
    db.close
}

run()
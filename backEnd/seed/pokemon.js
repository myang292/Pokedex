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


    const pokemons = [
        {
        num: '001',
        name: 'Bulbasaur',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/6/67/1-1.png',
        height: '0.71m',
        weight: '6.90kg',
        type: [grass.name, poison.name],
        weaknesses: [fire.name, ice.name, flying.name, psychic.name, bug.name]
        },

        {
        num: '002',
        name: 'Ivysaur',
        img: 'https://static.wikia.nocookie.net/kingdom-keymasters-database/images/c/ca/002Ivysaur_XY_anime_2.png',
        height: '0.99m',
        weight: '13.00kg',
        type: [grass.name, poison.name],
        weaknesses: [fire.name, ice.name, flying.name, psychic.name, bug.name]
    },

    {
        num: '003',
        name: 'Venusaur',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/3/3a/Venusaur_AG_anime.png',
        height: '2.01m',
        weight: '100.00kg',
        type: [grass.name, poison.name],
        weaknesses: [fire.name, ice.name, flying.name, psychic.name, bug.name]
    },

    {
        num: '004',
        name: 'Charmander',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/e/e0/Charmander_AG_anime.png',
        height: '0.61m',
        weight: '8.50kg',
        type: fire.name,
        weaknesses: [water.name, ground.name, rock.name]
    },

    {
        num: '005',
        name: 'Charmeleon',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/5/52/Charmeleon_AG_anime.png',
        height: '1.09m',
        weight: '19.00kg',
        type: fire.name,
        weaknesses: [water.name, ground.name, rock.name]
    },

    {
        num: '006',
        name: 'Charizard',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/4/42/6-1.png',
        height: '1.70m',
        weight: '90.50kg',
        type: fire.name,
        weaknesses: [water.name, ground.name, rock.name]
    },

    {
        num: '007',
        name: 'Squirtle',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/4/4d/7-1.png',
        height: '0.51m',
        weight: '9.00kg',
        type: water.name,
        weaknesses: [electric.name, grass.name]
    },

    {
        num: '008',
        name: 'Wartortle',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/4/46/8-1.png',
        height: '0.99m',
        weight: '22.50kg',
        type: water.name,
        weaknesses: [electric.name, grass.name]
    },
    
    {
        num: '009',
        name: 'Blastoise',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/1/11/9-1.png',
        height: '1.60m',
        weight: '85.50kg',
        type: water.name,
        weaknesses: [electric.name, grass.name]
    },

    {
        num: '010',
        name: 'Caterpie',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/8/8d/Caterpie_AG_anime.png',
        height: '0.30m',
        weight: '2.90kg',
        type: bug.name,
        weaknesses: [fire.name, flying.name, rock.name]
    },

    {
        num: '011',
        name: 'Metapod',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/a/a6/Metapod_AG_anime.png',
        height: '0.71m',
        weight: '9.90kg',
        type: bug.name,
        weaknesses: [fire.name, flying.name, rock.name]
    },
    
    {
        num: '012',
        name: 'Butterfree',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/3/39/Butterfree_AG_anime.png',
        height: '1.09m',
        weight: '32.00kg',
        type: bug.name,
        weaknesses: [fire.name, flying.name, rock.name, ice.name, electric.name]
    },
    
    {
        num: '013',
        name: 'Weedle',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/6/63/013Weedle_AG_anime.png',
        height: '0.30m',
        weight: '3.20kg',
        type: [bug.name, poison.name],
        weaknesses: [fire.name, flying.name, psychic.name, rock.name]
    },
    
    {
        num: '014',
        name: 'Kakuna',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/1/17/014Kakuna_AG_anime.png',
        height: '0.61m',
        weight: '10.00kg',
        type: [bug.name, poison.name],
        weaknesses: [fire.name, flying.name, psychic.name, rock.name]
    },
    
    {
        num: '015',
        name: 'Beedrill',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/7/79/015Beedrill_AG_anime.png',
        height: '0.99m',
        weight: '29.50kg',
        type: [bug.name, poison.name],
        weaknesses: [fire.name, flying.name, psychic.name, rock.name]
    },
    
    {
        num: '016',
        name: 'Pidgey',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/7/78/Pidgey_AG_anime.png',
        height: '0.30m',
        weight: '1.80kg',
        type: [normal.name, flying.name],
        weaknesses: [electric.name, rock.name]
    },
    
    {
        num: '017',
        name: 'Pidgeotto',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/a/a5/Pidgeotto_AG_anime.png',
        height: '1.09m',
        weight: '30.00kg',
        type: [normal.name, flying.name],
        weaknesses: [electric.name, rock.name]
    },
    
    {
        num: '018',
        name: 'Pidgeot',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/5/51/Pidgeot_AG_anime.png',
        height: '1.50m',
        weight: '39.50kg',
        type: [normal.name, flying.name],
        weaknesses: [electric.name, rock.name]
    },
    
    {
        num: '019',
        name: 'Rattata',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/7/76/Rattata_AG_anime.png',
        height: '0.03m',
        weight: '3.50kg',
        type: normal.name,
        weaknesses: fighting.name
    },
    
    {
        num: '020',
        name: 'Raticate',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/8/88/Raticate_AG_anime.png',
        height: '0.71m',
        weight: '18.50kg',
        type: normal.name,
        weaknesses: fighting.name
    },
    
    {
        num: '021',
        name: 'Spearow',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/3/32/021Spearow_AG_anime.png',
        height: '0.30m',
        weight: '2.00kg',
        type: [normal.name, flying.name],
        weaknesses: [electric.name, rock.name]
    },
    
    {
        num: '022',
        name: 'Fearow',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/1/17/022Fearow_AG_anime.png',
        height: '1.19m',
        weight: '38.00kg',
        type: [normal.name, flying.name],
        weaknesses: [electric.name, rock.name]
    },
    
    {
        num: '023',
        name: 'Ekans',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/9/91/Ekans_AG_anime.png',
        height: '2.01m',
        weight: '6.90kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name]
    },
    
    {
        num: '024',
        name: 'Arbok',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/9/92/Arbok_AG_anime.png',
        height: '3.51m',
        weight: '65.00kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name]
    },
    
    {
        num: '025',
        name: 'Pikachu',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/b/b9/Pikachu_AG_anime.png',
        height: '0.41m',
        weight: '6.00kg',
        type: electric.name,
        weaknesses: ground.name
    },
    
    {
        num: '026',
        name: 'Raichu',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/c/c7/Raichu_AG_anime.png',
        height: '0.79m',
        weight: '30.00kg',
        type: electric.name,
        weaknesses: ground.name
    },
    
    {
        num: '027',
        name: 'Sandshrew',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/6/60/Sandshrew_AG_anime.png',
        height: '0.61m',
        weight: '12.00kg',
        type: ground.name,
        weaknesses: [water.name, grass.name, ice.name]
    },
    
    {
        num: '028',
        name: 'Sandslash',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/5/5a/Sandslash_AG_anime.png',
        height: '0.99m',
        weight: '29.50kg',
        type: ground.name,
        weaknesses: [water.name, grass.name, ice.name]
    },
    
    {
        num: '029',
        name: 'Nidoran ♀ (Female)',
        img: 'https://www.pikpng.com/pngl/m/499-4992088_nidoqueen-png-pokemon-drawing-of-nidoqueen-clipart.png',
        height: '0.41m',
        weight: '7.00kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name]
    },
    
    {
        num: '030',
        name: 'Nidorina',
        img: 'https://static.wikia.nocookie.net/pokemon/images/6/67/030Nidorina_AG_anime.png',
        height: '0.79m',
        weight: '20.00kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name]
    },
    
    {
        num: '031',
        name: 'Nidoqueen',
        img: 'https://images.cults3d.com/uZt2ORDldJYHc-11Lf7SYkAC8Sc=/https://files.cults3d.com/uploaders/19525216/illustration-file/464298f2-db80-4ab7-95f1-c17ff1e55f0b/pngaaa.com-4591629.png',
        height: '1.30m',
        weight: '60.00kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name, water.name, ice.name]
    },
    
    {
        num: '032',
        name: 'Nidoran ♂ (Male)',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png',
        height: '0.51m',
        weight: '9.00kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name]
    },
    
    {
        num: '033',
        name: 'Nidorino',
        img: 'https://static.wikia.nocookie.net/pokemonfakemon/images/8/81/Nidorino_Dream.png',
        height: '0.89m',
        weight: '19.50kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name]
    },
    
    {
        num: '034',
        name: 'Nidoking',
        img: 'https://archives.bulbagarden.net/media/upload/thumb/c/c6/034Nidoking.png/250px-034Nidoking.png',
        height: '1.40m',
        weight: '62.00kg',
        type: poison.name,
        weaknesses: [ground.name, psychic.name, water.name, ice.name]
    },
    
    {
        num: '035',
        name: 'Clefairy',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/5/5e/Clefairy_AG_anime.png',
        height: '0.61m',
        weight: '7.50kg',
        type: normal.name,
        weaknesses: fighting.name
    },
    
    {
        num: '036',
        name: 'Clefable',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/9/9a/Clefable_AG_anime.png',
        height: '1.30m',
        weight: '40.00kg',
        type: normal.name,
        weaknesses: fighting.name
    },
    
    {
        num: '037',
        name: 'Vulpix',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/7/7e/038Vulpix_AG_anime.png',
        height: '0.61m',
        weight: '9.90kg',
        type: fire.name,
        weaknesses: [water.name, ground.name, rock.name]
    },
    
    {
        num: '038',
        name: 'Ninetails',
        img: 'https://static.wikia.nocookie.net/sonic-pokemon-unipedia/images/1/12/039Ninetales_AG_anime.png',
        height: '1.09m',
        weight: '19.90kg',
        type: fire.name,
        weaknesses: [water.name, ground.name, rock.name]
    },
    
    {
        num: '039',
        name: 'Jigglypuff',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
        height: '0.51m',
        weight: '5.50kg',
        type: normal.name,
        weaknesses: fighting.name
    },
    
    {
        num: '040',
        name: 'Wigglytuff',
        img: 'https://archives.bulbagarden.net/media/upload/thumb/9/92/040Wigglytuff.png/250px-040Wigglytuff.png',
        height: '0.99m',
        weight: '12.00kg',
        type: normal.name,
        weaknesses: fighting.name
    }
    ]

    await Pokemon.insertMany(pokemons)
    console.log('Pokemon are here')
}

const run = async () => {
    await main()
    db.close
}

run()
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const films = {
    'Jaws': {
        argument: 'Police chief Martin Brody, with the help of a marine biologist Richard Dreyfuss and ' +
            'professional shark hunter Robert Shaw hunts a man-eating great white shark that attacks ' +
            'beachgoers at a New England resort town',
        premiere_date: 'June 20, 1975',
        category: 'thriller',
        duration: 124,
        room_number: 4,
        available_in_IMAX: 'Yes',
        original_country: 'United States'
    },
    'Fear_and_Loathing_in_Las_Vegas': {
        argument: 'Raoul Duke and Dr. Gonzo journey through Las Vegas as their initial journalistic ' +
            'intentions devolve into an exploration of the city under the influence of psychoactive ' +
            'substances.',
        premiere_date: 'May 22, 1998',
        category: 'comedy',
        duration: 118,
        room_number: 5,
        available_in_IMAX: 'No',
        original_country: 'United States'
    },
    'Pirates_of_the_Caribbean:_The_Curse_of_the_Black_Pearl': {
        argument: 'Jack Sparrow and blacksmith Will Turner, as they attempt to rescue the kidnapped ' +
            'Elizabeth Swann.',
        premiere_date: 'July 9, 2003',
        category: 'swashbuckler',
        duration: 143,
        room_number: 1,
        available_in_IMAX: 'Yes',
        original_country: 'United States'
    },
    'Harry_Potter_and_the_Goblet_of_Fire': {
        argument: 'Harry, during his fourth year at Hogwarts, is chosen by the Goblet of Fire to compete' +
            ' in the Triwizard Tournament.',
        premiere_date: '6 November, 2005',
        category: 'fantasy',
        duration: 157,
        room_number: 2,
        available_in_IMAX: 'Yes',
        original_country: 'United Kingdom'
    },
    'The_Parent_Trap': {
        argument: 'Identical twins who have been separated at birth and, upon meeting by chance at ' +
            'summer camp, decide to work together to reunite their divorced parents',
        premiere_date: 'July 29, 1998',
        category: 'romantic comedy',
        duration: 128,
        room_number: 'N/A',
        available_in_IMAX: 'No',
        original_country: 'United States'
    }
};

app.get('/films', (req, res) => {
    res.json(films);
});

app.get('/films/:title', (req, res) => {
    const film = req.params.title;

    if (films[film] === undefined) {
    res.status(404).json({
        error: 'Error 404. Film not found'
    });
}
    
    res.json(films[film]);
});

app.post('/films/', (req, res) => {
    const title = req.body.title;
    const argument = req.body.argument;
    const premiere_date = req.body.premiere_date;
    const category = req.body.category;
    const duration = req.body.duration;
    const room_number = req.body.room_number;
    const available_in_IMAX = req.body.available_in_IMAX;
    const original_country = req.body.original_country;

    if (films[title] !== undefined) {
        return res.status(403).json({
            error: 'Error 403. Film already exists'
        })
    }
    if (typeof duration !== 'number' || duration < 0) {
        return res.status(400).json({
            error: 'Error 400. Duration must be a number greater than 0'
        })
    }
    if (typeof title === 'undefined' || typeof argument === 'undefined') {
        return res.status(400).json({
            error: 'Error 400. Title and Argument are mandatory fields.'
        })
    }
    if (typeof room_number !== 'number' || room_number <= 0 || room_number > 9 ) {
        return res.status(400).json({
            error: 'Error 400. Room_number must be a number between 1 and 9.'
        })
    }

    films[title] = {
        argument: argument,
        premiere_date: premiere_date,
        category: category,
        duration: duration,
        room_number: room_number,
        available_in_IMAX: available_in_IMAX,
        original_country: original_country
    };

    res.status(201).json(films[title]);
})

app.delete('/films/:title', (req, res) => {
    const title = req.params.title;
    if (films[title] === undefined) {
        res.status(404).json({
            error: 'Error 404. Film not found'
        });
    }

    delete films[title];

    res.status(204).end();
});

app.put('/films/:film', (req, res) => {
    const title = req.params.title;
    const argument = req.body.argument;
    const premiere_date = req.body.premiere_date;
    const category = req.body.category;
    const duration = req.body.duration;
    const room_number = req.body.room_number;
    const available_in_IMAX = req.body.available_in_IMAX;
    const original_country = req.body.original_country;
    
    films[title] = {
        argument: argument,
        premiere_date: premiere_date,
        category: category,
        duration: duration,
        room_number: room_number,
        available_in_IMAX: available_in_IMAX,
        original_country: original_country
    };
    
    res.status(200).json(films[title]);
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});


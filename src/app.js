import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const films = {
    'Jaws': {
        title: 'Jaws',
        argument: 'Police chief Martin Brody, with the help of a marine biologist Richard Dreyfuss and professional shark hunter Robert Shaw hunts a man-eating great white shark that attacks beachgoers at a New England resort town',
        premiere_date: 'June 20, 1975',
        category: 'thriller',
        duration: '124 minutes',
        room_number: 4,
        available_in_IMAX: 'Yes',
        original_country: 'United States'
    },
    'Fear_and_Loathing_in_Las_Vegas': {
        title: 'Fear and Loathing in Las Vegas',
        argument: 'Raoul Duke and Dr. Gonzo journey through Las Vegas as their initial journalistic intentions devolve into an exploration of the city under the influence of psychoactive substances.',
        premiere_date: 'May 22, 1998',
        category: 'comedy',
        duration: '118 minutes',
        room_number: 5,
        available_in_IMAX: 'No',
        original_country: 'United States'
    },
    'Pirates_of_the_Caribbean:_The_Curse_of_the_Black_Pearl': {
        title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
        argument: 'Jack Sparrow and blacksmith Will Turner, as they attempt to rescue the kidnapped Elizabeth Swann.',
        premiere_date: 'July 9, 2003',
        category: 'swashbuckler',
        duration: '143 minutes',
        room_number: 1,
        available_in_IMAX: 'Yes',
        original_country: 'United States'
    },
    'Harry_Potter_and_the_Goblet_of_Fire': {
        title: 'Harry Potter and the Goblet of Fire',
        argument: 'Harry, during his fourth year at Hogwarts, is chosen by the Goblet of Fire to compete in the Triwizard Tournament.',
        premiere_date: '6 November, 2005',
        category: 'fantasy',
        duration: '157 minutes',
        room_number: 2,
        available_in_IMAX: 'Yes',
        original_country: 'United Kingdom'
    },
    'The_Parent_Trap': {
        title: 'The Parent Trap',
        argument: 'Identical twins who have been separated at birth and, upon meeting by chance at summer camp, decide to work together to reunite their divorced parents',
        premiere_date: 'July 29, 1998',
        category: 'romantic comedy',
        duration: '128 minutes',
        room_number: 'N/A',
        available_in_IMAX: 'No',
        original_country: 'United States'
    },
    'Everything_Everywhere_All_at_Once': {
        title: 'Everything Everywhere All at Once',
        argument: 'Evelyn Quan Wang, a Chinese-American immigrant who, while being audited by the IRS, discovers that she must connect with parallel universe versions of herself to prevent a powerful being from destroying the multiverse.',
        premiere_date: 'March 11, 2022',
        category: 'independent absurdist comedy-drama',
        duration: '139 minutes',
        room_number: '3',
        available_in_IMAX: 'Yes',
        original_country: 'United States'
    }
};

app.get('/films', (req, res) => {
    res.json(films);
});

app.get('/films/:film', (req, res) => {
    const film = req.params.film;
    res.json(films[film]);
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});


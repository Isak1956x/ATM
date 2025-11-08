import { modeA, modeB, efficientMode } from './calculate.js';
import AtmMode from '../../enums/AtmMode.js';

const calculateByMode = function(amount, mode)
{
    switch (mode)
    {
        case AtmMode.EFICIENT:
            return efficientMode(amount);
        case AtmMode.ModeA:
            return modeA(amount);
        case AtmMode.ModeB:
            return modeB(amount);
        default:
            return {error: "Invalid mode selected"};
    }
}

export default calculateByMode;
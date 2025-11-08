import AtmMode from '../../enums/AtmMode.js';

function validate(amount, mode)
{
   
    if( !parseInt(amount) || amount == "")
    {
      
        return {error: "Amount must be a valid number", Success: false};
    }
    if (amount % 100 != 0)
    {
         
        return {error: "Amount must be multiple of 100", Success: false};
    }
    
    switch (mode)
    {
        case AtmMode.EFICIENT:
               if (amount % 100 != 0)
        {
         
        return {error: "The amount cannot be dispensed in the selected mode",    Success: false};
        }
        break;
        case AtmMode.ModeA:
               if (amount % 1000 != 0 && amount % 200 != 0)
         {
     
         return {error: "The amount cannot be dispensed in the selected mode", Success: false};
       }
        break;
        case AtmMode.ModeB:
              if (amount % 500 != 0 && amount % 100 != 0)
         {
         
        return {error: "The amount cannot be dispensed in the selected mode", Success: false};
        }
         break;
       
    }
        return {Success: true}
}

export default validate;
import {Box,Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    
    const handleChange = (isExpanded : boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false);
    }
    
   return(
    <Box m={10}>
        <Accordion expanded={expanded === 'panel1'} onChange={(event,isExpanded) => handleChange(isExpanded, 'panel1')}>
           <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMoreIcon/>}>
               <Typography>Lorem 1</Typography>
           </AccordionSummary>
             <AccordionDetails>
               <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quibusdam beatae nam dolor at quo iure numquam officiis accusantium minima quisquam voluptatem porro tempora, quas autem animi modi dolore eum, fugiat odit omnis harum eveniet. Repellendus tempora aspernatur, dolor error pariatur minima omnis, fugit modi vero ipsam quas animi rerum.
               </Typography>
              </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded=== 'panel2'} onChange={(event,isExpanded) => handleChange(isExpanded, 'panel2')}>
           <AccordionSummary id="panel2-header" aria-controls="panel2-content" expandIcon={<ExpandMoreIcon/>}>
               <Typography>Lorem 2</Typography>
           </AccordionSummary>
             <AccordionDetails>
               <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quibusdam beatae nam dolor at quo iure numquam officiis accusantium minima quisquam voluptatem porro tempora, quas autem animi modi dolore eum, fugiat odit omnis harum eveniet. Repellendus tempora aspernatur, dolor error pariatur minima omnis, fugit modi vero ipsam quas animi rerum.
               </Typography>
              </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={(event,isExpanded) => handleChange(isExpanded, 'panel3')}>
           <AccordionSummary id="panel3-header" aria-controls="panel3-content" expandIcon={<ExpandMoreIcon/>}>
               <Typography>Lorem 3</Typography>
           </AccordionSummary>
             <AccordionDetails>
               <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quibusdam beatae nam dolor at quo iure numquam officiis accusantium minima quisquam voluptatem porro tempora, quas autem animi modi dolore eum, fugiat odit omnis harum eveniet. Repellendus tempora aspernatur, dolor error pariatur minima omnis, fugit modi vero ipsam quas animi rerum.
               </Typography>
              </AccordionDetails>
        </Accordion>
    </Box>

   )
}
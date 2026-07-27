

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import data from "./TrendCard.json"
import Typography from '@mui/material/Typography';


import Button from '@mui/material/Button';



export default function RecipeReviewCard() {



  return (<>
  <div style={{textAlign:"center",padding:"50px"}}> <p>Trending from the Blog</p></div>
  
  <div className='superCard'>
    {data.map((e)=>(
    <Card sx={{ }} id='card'   >

      <CardMedia
        component="img"
        height="194"
        image={e.img}
        alt="Paella dish"
       
      />
      <CardContent>
        <Typography id="Typography-p" variant="body2" sx={{ color: 'text.secondary',fontWeight:"bold",fontFamily:"proxima"}}>
          {e.title}
    
        </Typography>
        <Typography sx={{fontSize:"16px"}}>
          {e.date}
        </Typography>
        <Typography  style={{paddingTop:"10px",textAlign:"center"}}>
        <Button id='btnTrend' size="small">{e.btn}</Button>

        </Typography>
        
      </CardContent>
 

    </Card>))}
    </div>
    </>
  );
}

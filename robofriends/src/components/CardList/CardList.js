import React from 'react';
import Card from '../Card/Card'



//using state


function CardList({ robots }) {
    //the return component
    return (
        <div >
            {//the loop
                robots.map((user, i) => {
                    return (
                    <Card 
                    key={ i }
                     id={ robots[ i ].id } 
                     name={ robots[ i ].name } 
                     email={ robots[ i ].email } 
                     />
                     );

                })
            }
        </div>
    )
}

export default CardList

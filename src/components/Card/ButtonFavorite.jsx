import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";


const FavoriteButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    return (
          <>
       {isClicked && 
             <FaHeart className="heart solid"
                      onClick={() => setIsClicked(false) } 
            />
          }
        {!isClicked &&
              <FaRegHeart className="heart light"
                          onClick={() => setIsClicked(true) }
            />
          } 
          </>
      );
  }
  
  export default FavoriteButton;
  
import  './style.css'

const RestaurantForm = () => {


  return (
    <form action='https://formspree.io/f/xyyrqkpe' method='POST' >
      <input type="text" id="restaurantName" name="restaurantName" placeholder='Restaurant name*' required />

      <input type="text" id="restaurantLocation" name="restaurantLocation" placeholder='Restaurant location*' required />

      <input type="number" id="restaurantContactNumber" name="restaurantContactNumber" placeholder='Restaurant contact number*' required/>

      <input type="textarea" id="restaurantReview" name="restaurantReview" placeholder='What do you like about the restaurant?' required />

      <button type="submit" >Submit</button>
      <p>Restaurant owners can <a href="/login" > add restaurant from here</a></p>
    </form>
  );
};

export default RestaurantForm;
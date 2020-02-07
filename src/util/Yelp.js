let apiKey = 'dy8-bQ9GGTgRXkbX_AsBnvCgUl85dnKC5vbPmCRMoCPazDHaX9kzIi70e4v5wAIQC-6kK3GvgOgwtQhrQjmK7q3-9CO_6xCLduA-hbvGyWnuPshPb63PriIRBj48XnYx';
// searchYelp instead of search
 const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
     { headers: { Authorization: `Bearer ${apiKey}`}}).then(response => { 
         return response.json();}).then(jsonResponse => {
           if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                  console.log(business);
                 return {
                         id: business.id,
                         //business.image_url instead of business.imageSrc
                         imageSrc: business.image_url,
                         name: business.name,
                         //business.location.address1 instead of business.address. Same to the others
                         address: business.location.address1,
                         city: business.location.city,
                         state: business.location.state,
                         zipCode: business.location.zip_code,
                         category: business.categories[0].title,
                         rating: business.rating,
                         reviewCount: business.review_count
          };
        });
      }
    });
   }
 };

 export default Yelp;
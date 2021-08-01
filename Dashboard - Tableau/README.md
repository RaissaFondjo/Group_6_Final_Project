![image](https://user-images.githubusercontent.com/79486450/126399958-f9bbb4c1-9681-4a9b-b625-9116ec35f2b2.png)

# Airbnb Price Prediction Using Machine Learning and Sentiment Analysis
## Group_6_Final_Project

## Questions we want to answer with the data: 
- What are the key factors that affect the price of the rental property? 
    - We wanted to identify if the following key feature drive the price of the property: Neighborhood (Location), Competitor’s prices, Special Amenities, consumers’ reviews, and opinions.
    
- Within the same neighborhood what make a customer selecting one property vs another?
    - We wanted to identify if there is a correlation between reviews and # of times certain property being rent out.
    
- Which neighborhoods in Boston have the highest rental prices?
    - Reason behind the high price.


# Dashboard:
To get the insight view of the Boston dataset, we used Tableau Visualization method to demonstrate the findings and for the further analysis.

|  **Objective**  |  **Link** |  **Description**  |      
|  :---  |  :---  |  :---  |
|  Anlysis  |  [Tableau](https://public.tableau.com/app/profile/geetha.shanthibushan/viz/AirbnbPriceAnalysisPrediction/AirbnbPriceAnalysis_1)  |  The Visual Analysis  |

### Following Tools were used:
  * Tableau Desktop App - exported data out of MongoDB into JSON files (airbnb_cleansed)
  * Tableau Public Online version - exported data out of MongoDB into csv files (airbnb_cleansed)
  * Jupyter notebook for data cleaning and Mechine learning
  * Tableau for visualizations - Imported data into Tableau.
     - Created and style worksheets, dashboards, and stories in Tableau.
  * Visual Studio Code for our website code (js,html,css) 
 
## The Interactive Elements:
  * An interactive map was created showing Boston neighborhoods and the top 200 listings based on `review_scores_rating`. For this, we first connected the Mongo database through `PyMongo.MongoClient` module while hiding our login credentials from uploaded code using the `getpass` function. A DataFrame was then generated with the columns we wanted to list on the map, then sorted based on score ratings before saving the data in a geojson format. 

  * From the geojson file containing the longitude and latitude, a pin and popup were added to the map in JavaScript and HTML, which worked locally.
![Map](Resources/Map.png)


  * We are now working on the next step, which is to deploy the map online using Heroku and Flask app. We need to find a way to read in the hidden API key to be able to display the map.
  
## The Visual Analysis Method:

We used visual analysis method to understand the dataset and to answer our questions.  This technique was the faster way for us to understand the dataset and to design our machine learning model.

## Results:

### What are the key factors that affect the price of the rental property?

#### Room Type:  
In the dataset there are three type of room types: homes/apartments, private or shared rooms; The below figure indicates the average price for each room type, the color and the price shows details about the property type.  The chart indicating that Entire home rental price are higher than private room or shared room.  
![Correlation Between Average Price and Room Type](https://user-images.githubusercontent.com/79486450/126870476-9c393ad6-9efd-4f32-970f-4f356dc059d5.png)

#### Property Type:  
Property characteristics, which is property type also play major role when it comes to pricing the rental unit. Price for each property type boken down by room type. Colour shows details about the propery type and the highlighter option to provide select and show specific Neighborhood. Below figure indicates that regardless of the room type property such as Apartment and house rental price are significantly higher than other type of property.
![Price Range by Room   Property Type](https://user-images.githubusercontent.com/79486450/126870782-12cba00b-7a7c-4d36-adc9-b1107c70ae05.png)

#### Number of Reviews:
Customer reviews significantly affect the prices, and the figure below indicate the relationship of number of review and the type of room and property. Distinct count of Number Of Reviews for each Room Type broken down by Property Type.  Color shows details about Property Type and the highlighter option to provide select and show specific Neighborhood. Based on the chart we can identify that Apartment and house rental has the higher number of reviews.
![Number of Reviews by Room   Property Type](https://user-images.githubusercontent.com/79486450/126870933-92b966eb-9e58-4034-8cc2-e4a05c0eccc4.png)

#### Amenities:
The below chart represent the amenities provided by the host for the rental units, we can indicate that based on 95% of the rental unit have access to Wireless internet and these amenities are based on client needs.
![Amenities](https://user-images.githubusercontent.com/79486450/126871026-f1fef731-85e9-4261-8867-598308404679.png)

### Which neighborhoods in Boston have the highest rental prices?

In the Airbnb Boston listing dataset neighborhoods are separated into 25 districts.

#### Listing Price by Neighborhood
Comparing the average price of the neighborhoods and the listing count for each neighborhood to determine the relationship between the neighborhood average price and listing count.  
The illustration below indicating that South Boston Waterfront, Bay Village, Leather District are the top three neighborhood that have higher average prices by listing.   
![Average Listing Price by Neighborhood](https://user-images.githubusercontent.com/79486450/126400125-ecaeca80-be83-4025-a8f8-b57db9180532.PNG)

#### Popular Neighborhood by listing count
The most popular neighborhood based on listing are Jamaica Plain, South End and Back Bay. 
![Popular Neighborhood by listing count](https://user-images.githubusercontent.com/79486450/126400136-4272cc12-d083-4a4b-991e-fb7ffdf76272.PNG)
We can conclude that neighborhood with fewer listings have higher average listing price and neighborhood with higher listings has lower average price.

### Within the same neighborhood what make a customer selecting one property vs another?

#### Popular Neighborhood comparison with Number of listing, Average Price, Review Scores
We wanted to identify if there is a correlation between count of Listing, Avg. Review Scores Rating and Avg. Price for each Neighborhood.  Color shows details about count of Listing, Avg. Review Scores Rating and Avg. Price.
![Popular Neighborhood comparison with count of listing, Avg Price, Review Scores](https://user-images.githubusercontent.com/79486450/126871254-f8330351-211e-494f-82d2-f73e77879f8f.png)

#### Treemap - Comparative analysis of the Price
Color shows average of Price.  Size shows average of Cleaning Fee.  The marks are labeled by Accomodates, Bathrooms, Beds, Room Type, Property Type, Neighborhood, average of Total Fee and average of Review Scores Rating. The view is filtered on average of Total Fee, which ranges from $25 to $1,500.
![Treemap - Comparative analysis of the Price](https://user-images.githubusercontent.com/79486450/126871773-b28ad731-7ecc-44f4-ba1f-db53f72babdb.png)

All related Dashboard scripts and files are in the [Dashboard](https://github.com/Pascalduc/Group_6_Final_Project/tree/main/Boston%20Airbnb%20Dashboard) folder.





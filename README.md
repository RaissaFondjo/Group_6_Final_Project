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


## Dashboard:
To get the insight view of the Boston dataset, we used Tableau Visualization method to demonstrate the findings and for the further analysis.

• Following Tools were used:
  * Tableau Desktop App - exported data out of MongoDB into JSON files (cleaned data)
  * Tableau Public Online version - exported data out of MongoDB into csv files (cleaned data)
  * Jupyter notebook for data cleaning
  * Tableau for visualizations - Imported data into Tableau.
     *Created and style worksheets, dashboards, and stories in Tableau.
 
• The interactive elements:
  * Dashboard Tableau URL actions -  Navigate to a web address from within the dashboard
  
• The Analysis:

- Following are the main factors that affect the price of Airbnb rental unit:

#### Room Type:  
In the dataset there are three type of room types: homes/apartments, private or shared rooms; The below figure indicates the relationship between the Room type and the average price. 
![Correlation Between Average Price and Room Type](https://user-images.githubusercontent.com/79486450/126400518-93060d9d-8191-496b-81f3-ead2a42ddb61.PNG)

#### Property Type:  
Property characteristics, which is property type also play major role when it comes to pricing the rental unit.  Below figure indicates that regardless of the room type property such as Apartment and house rental price are significantly higher than other type of property.
![Price Range by Room   Property Type](https://user-images.githubusercontent.com/79486450/126402208-d4719db7-d922-45ed-9db3-50b27a65f99e.PNG)


#### Number of Reviews:
Customer reviews significantly affect the prices, and the figure below indicate the relationship of number of review and the type of room and property. 
![Number of Reviews by Room   Property Type](https://user-images.githubusercontent.com/79486450/126401971-b13abcf1-556b-49f5-a838-96dda892b83d.PNG)

- Within the same neighborhood what make a customer selecting one property vs another?
    - We wanted to identify if there is a correlation between reviews and # of times certain property being rent out.
![Popular Neighborhood by listing count   Avg  Price](https://user-images.githubusercontent.com/79486450/126401898-41f8b846-9784-421c-ac7f-c692067cfc77.PNG)

- In the Airbnb Boston listing dataset neighborhoods are separated into 25 districts. To find which neighborhoods in Boston have the highest rental prices; we compared the average price of the neighborhoods and the listing count for each neighborhood to determine the relationship between the neighborhood average price and listing count.  

The illustration below indicating that South Boston Waterfront, Bay Village, Leather District are the top three neighborhood that have higher average prices by listing.   
![Average Listing Price by Neighborhood](https://user-images.githubusercontent.com/79486450/126400125-ecaeca80-be83-4025-a8f8-b57db9180532.PNG)

The most popular neighborhood based on listing are Jamaica Plain, South End and Back Bay. 
![Popular Neighborhood by listing count](https://user-images.githubusercontent.com/79486450/126400136-4272cc12-d083-4a4b-991e-fb7ffdf76272.PNG)

We can conclude that neighborhood with fewer listings have higher average listing price and neighborhood with higher listings has lower average price.
![Popular Neighborhood by listing count   Avg  Price](https://user-images.githubusercontent.com/79486450/126400145-8aba679f-5ff2-4d44-bdd5-1ed1d8e194c9.PNG)

## Tableau Visulaization:
#### [Airbnb Price Analysis](https://public.tableau.com/app/profile/geetha.shanthibushan/viz/AirbnbPriceAnalysisPrediction/AirbnbPriceAnalysis_1)

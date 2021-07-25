![image](https://user-images.githubusercontent.com/79486450/126399958-f9bbb4c1-9681-4a9b-b625-9116ec35f2b2.png)

# Airbnb Price Prediction Using Machine Learning and Sentiment Analysis
## Group_6_Final_Project

---

## Team Members:

|  **Member**  |  **Role**  |  **Responsibilities**  |                                            
|  :---  |  :---  |  :---  |
| [Syed Ahmed](https://github.com/ahmed17777)  |  Machine Learning Lead  |  Manage the Machine Learning Model and Design  |
| [Pascal Duchesneau](https://github.com/Pascalduc)  |  GitHub Lead  |  Manage the GitHub Repository, Designed Interactive element, Heroku |
| [Raissa Fondjo]( https://github.com/RaissaFondjo)  |  Dashboard Lead  |  Manage the Presentation Google slides & Designed Mock-up Dashboard  |
| [Geetha Shanthibushan](https://github.com/gshanthibushan)  |  Project Coordinator  |  Manage the Technologies and tracking group ideas, decisions, progress, and Designed Tableau Dashboard Presentation  |
| [Lalchand Shivraj](https://github.com/LalchandShivraj)  |  Database Lead  | Manage the Database and ETL Process  |
 
Even though we have assigned role to each team member, the members will and to contribute equally throughout the final project.

---

## Overview: 
Estimating a price for short time stay lodging is a difficult task for the hosts when it comes to listing the property in Airbnb.  In addition, customers select rental based on price, review, and picture of the property, but the property may not live up to its listing.   Therefore, our team decided to develop a price prediction model using machine learning and one of natural language processing technique of, sentiment analysis.  

For this project we selected Airbnb datasets from Kaggle.  The datasets contain information about the city of Boston, MA Airbnb properties listings and customer’s reviews of these properties.  

## Source of Data: 

|  **Name**  |  **Data Source** |  **Data Details**  |      
|  :---  |  :---  |  :---  |
|  Kaggle  |  https://www.kaggle.com/airbnb/boston  |  Listings.csv, including full descriptions and average review score  |
|  Kaggle  |  https://www.kaggle.com/airbnb/boston  |  Reviews.csv, including unique id for each reviewer and detailed comments  |
|  Kaggle  |  https://www.kaggle.com/airbnb/boston  |  Calendar.csv, including listing id and the price and availability for that day  |


## Questions we want to answer with the data: 
- What are the key factors that affect the price of the rental property? 
    - We wanted to identify if the following key feature drive the price of the property: Neighborhood (Location), Competitor’s prices, Special Amenities, consumers’ reviews, and opinions.
    
- Within the same neighborhood what make a customer selecting one property vs another?
    - We wanted to identify if there is a correlation between reviews and # of times certain property being rent out.
    
- Which neighborhoods in Boston have the highest rental prices?
    - Reason behind the high price.

## Database ERD:
* PostgresSQL is used to store and manipulate data. The image below represents the tables of data that are uploaded onto the database in Postgres. The entity relational diagram allows for easier joining of tables with SQL and is a helpful reference while importing data into the database. There are two main tables with data that is used to build and perform the machine learning model. 
* The most common and obvious connect between the two datasets is the ID column.
![ERD-Air_BandB](https://user-images.githubusercontent.com/78666055/125123343-8b499800-e0c4-11eb-8a4d-483298cb137a.png)

* A sample code to merge the two tables can be found in the Jupyter Notebook file `AirBnB.ipynb`.

```
airbnb_df = pd.merge(listings_df, reviews_df, how='left', left_on=['id'], right_on=['listing_id'])
airbnb_df.head(10)
```
## Machine Learning Model:

  ![data-16-5-5-1-NLP-Pipeline](https://user-images.githubusercontent.com/45697471/125150334-fe76fc80-e10c-11eb-8974-252280baab95.png)


Our objective in this project is to predict Airbnb rental values using the features given in our dataset. We plan to do this by conducting a sentiment analysis using data about comments from `reviews2017.csv`, and feeding it to an NLP pipeline like the one shown above so that it can be used for machine learning, as well as taking variables from `listings2017.csv` to perform a multiple linear regression using the **sklearn** library. Therefore we will have two models: a linear regression model that uses customer sentiment to predict price, and a multiple linear regression model that uses variables from the `listings2017.csv` file. With our target variable being `price`, here are the features we have selected for the regression model: 

- `host_response_rate`
- `host_acceptance_rate`
- `property_type`
- `room_type`
- `accomodates`
- `bathrooms`
- `bedrooms`
- `beds`
- `bed_type`
- `amenities`
- `price`
- `security_deposit`
- `cleaning_fee`
- `extra_people`
- `number_of_reviews`
- `last_review`
- `review_scores_rating`
- `cancellation_policy`

Once the datasets are cleaned and any outliers are removed, we can use scikit-learn machine library's `f_regression()` function to provide correlation scores for the features listed above. Once we have these scores, we can select features that will increase our model's accuracy and drop any features that do not have a high correlation. This will help optimize our model for predictions.

# Dashboard:
To get the insight view of the Boston dataset, we used Tableau Visualization method to demonstrate the findings and for the further analysis. We also used a Navigation bar that includes tabs to Dashboards, Machine Learning and Github Repository pages. Features input where users can select from twenty-two feature dropdowns to predict rent prices. Multiple Features can be displayed at once and selected areas of the graph can be enlarged with adapting axes, And we embed a number of Tableau dashboards in the Dashboards page

### Link for the Tableau Visulaization: [Airbnb Price Analysis](https://public.tableau.com/app/profile/geetha.shanthibushan/viz/AirbnbPriceAnalysisPrediction/AirbnbPriceAnalysis_1)
### The website page deployed on github https://raissafondjo.github.io/Group_6_Final_Project/templates/index.html 
### And the link to our Google Presentation https://1drv.ms/p/s!Aq1EheQjtSdDjGo4CsYz7WvhfgXD?e=A0mBpL

## Following Tools were used:
  * Tableau Desktop App - exported data out of MongoDB into JSON files (airbnb_cleansed)
  * Tableau Public Online version - exported data out of MongoDB into csv files (airbnb_cleansed)
  * Jupyter notebook for data cleaning and Mechine learning
  * Tableau for visualizations - Imported data into Tableau.
     - Created and style worksheets, dashboards, and stories in Tableau.
  * Visual Studio Code for our website code (js,html,css) 
 
## The interactive elements:
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

### Machine Learning Model:

At this stage of the project, we did the following:
- Preprocessed the raw data 
- Performed an exploratory analysis 
- selected features for our machine learning algorithms to predict price 

In this section, I will explain my findings during this process. 

**Preprocessing**

With the raw data loaded into a DataFrame using PyMongo, the first step was to convert all numerical variables into int / float format for processing using `to_numeric()`. Next, we checked for nulls and decided to drop the null values since it accounted for a small percentage of our rows. Once this was done, we encoded all categorical variables into numerical values that can be read by a Machine Learning algorithm. 

**Exploratory Analysis**

In our exploratory analysis, we used the `describe()` method to create a statistical summary of our variables so we could assess our measures of central tendency and try to identify outliers. The next step was to use `corr()` to find variables that have a strong correlation with our target variable, price. We chose variables with a correlation coefficient above 0.20 to be used as features in our machine learning model. The following is a heatmap that shows correlation between our chosen variables: 

 ![2](https://user-images.githubusercontent.com/45697471/126885894-637280d9-57ab-40b3-b765-ffc873f66c44.png)


**Machine Learning**

With preprocessing complete, and features selected, we were ready to start testing our machine learning models. Our X variables included the features shown in the correlation matrix above, and our 'y' variable was price. We split the data into training and testing sets with a random state of 45, test size of 30% and training set size of 70%. We chose three different types of regression models to predict our target variable: Random Forest Regressor, Linear Regression, and Decision Tree regression. We wanted to see how these three different models will perform, and which one of them will give us the highest R squared value. 

The Random Forest Regressor algorithm is a supervised learning model that can be used for classification and, in our case, regression. We chose this algorithm as it is good at learning complex and non-linear relationships, and is easy to interpret. Limitations for this model include: chances of overfitting and may require more memory to run model. This model gave us the highest R squared value (0.56) out of all models tested, as shown below. Of course, we also utilized the simple Linear Regression supervised learning model, which is easy to implement, less complex when compared to other algorithms, and simple to interpret. Limitations for this model include: the model can be negatively affected by outliers and it could oversimplify real world problems by assuming linear relationships between variables. This model gave us an R squared value of 0.51. The final model we used was the decision tree model, which is a simpler version of the Random Forest model. We included this model as it is easy to understand and interpret, works with numerical and categorical features, and requires little data preprocessing. However, one drawback of this model is a tendency to overfit. The decision tree model gave us an R squared value of 0.47, which was the lowest of all models tested. 

![3](https://user-images.githubusercontent.com/45697471/126886189-5f7ece54-cde6-49a6-b54a-4b27bb82c2db.png)

As we can see, further optimization needs to be done to make our models more accurate. I plan on optimizing these models for the next segment by:
- Dimensionality reduction by means of feature elimination or feature reduction 
- Modifying the train, test split 

In the next segment, we also plan on utilizing the comments column in our dataset to perform a sentiment analysis using NLP. 

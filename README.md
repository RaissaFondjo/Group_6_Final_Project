# Housing Trends

## Group_6_Final_Project

## Overview: 
The housing market in the United States (US) has been increasing as the mortgage rates drops, and the unexpected chance of reallocation made possible by remote work.  Therefore, our team wanted to predict the future trend of housing market in US by using machine learning models.

## Team Responsibilites
![image](https://user-images.githubusercontent.com/79486450/124840444-fbd3a600-df58-11eb-86be-37948e40e25a.png)
Even though we have assigned role to each team member, the members will and to contribute equally throughout the final project.

## Source of Data: 
![image](https://user-images.githubusercontent.com/79486450/124840502-20c81900-df59-11eb-8956-fad210d56e95.png)

## Machine Learning Model 

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

## ERD:

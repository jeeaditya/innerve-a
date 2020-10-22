# MediWiz

## Problem statement:

### 1. Identify Cut Medicine Strips
We all have had this problem where we have a cut medicine strip lying around, and that remaining part does not have it's name on it, just random stuff is visible. And we might not remember what was the name of the medicine or it's use.

To solve this problem, the user can just click a picture of that cut medicine strip, and upload it on our application.
Our application will scan it using OCR, and search for the best match in our prepared database.
So the user will get all the required information about it including Name, Uses and Side Effects. 
If the OCR is not able to detect text from the medicine, user has the option to manually enter the visible text on the medicine (preferably Composition and/or Manufacturer name)


### 2. Know all details about your medicine ( Helps the elderly )
As elder people consume a lot of medicines, it's hard for them to remember the names and uses of all of them. And they might not be able to read the name on a medicine strip, or look for it's use on the internet.

So they can just click and scan the picture of any medicine strip from the application, and get to know all the details about that medicine, using Text To Speech.

## Challenges faced:

The first challenge was, that there was no free database on the internet for the Medicines available in the Indian market. So we had to scrape all the data from a pharmacy website, and then prepare a database. It was hard to find a suitable website for scraping too, which had all the details we required for our database.

The next problem we faced was while applying OCR. As the text on the medicine strip is extremely small, so it's very hard for the Tesseract OCR model to identify the text on the strip. It needs a very clear and sharp image for suitable results. The back of the medicine strips also don't have a plain surface, which also makes it impossible to detect any text. This problem could be solved using training the OCR model on Medicine images data.

## To use:

1. Install Node.js

> https://nodejs.org/en/download/

2. Fork and Clone the repository

```
 git clone repo_url
```

3. Navigate to the directory

```
 ./innerve-a/
```

4. Run the command in your terminal or bash to install the node modules

```
 npm install
```

5. To start the application in your local server

```
 npm run watch
```

6. Open your browser and navigate to:

> http://localhost:3000/

7. To stop the development server, go to the opened terminal

```
ctrl + c
```

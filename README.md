# CareDash Code Test

For this challenge I have created a responsive home page inspired by the CareDash website.

To see this page in action simply do the following:

In your terminal type
```
git clone https://github.com/ptascio/CareDashChallenge.git
```

CD into the repository and open the ```index.html``` page in your browser.

### Form

While this form is not connected to any backend the user can fill it out and get feedback. If any inputs are blank, you will get errors. I used a ```regex``` to encourage proper email submissions. Lastly, my design implements some very basic checks to ensure that passwords are a minimum of 6 characters and that the user knows for sure what they have entered. Of course, these password checks are not secure at all and can easily be seen in the console, so they should not be considered production ready. When the form is filled out correctly and submitted a ```modal``` appears alerting the user that their submission is a success and encouraging them to stay in touch via social media.

### Responsive Design
I know that I could have used ```Bootstrap``` for this project but instead I chose to just use straight ```CSS``` and ```media-queries```. I did this because I was going to use my own styling anyway and didn't want to spend time overwriting rules. The ```media-queries``` ensure that while elements disappear as the screen size decreases the layout is still pleasing and intuitive for the user.  

### Next Steps
The major next step for this project would be to connect it to a backend using ```Ruby on Rails```. This would make actual password hashing possible and allow users to create accounts and write reviews.

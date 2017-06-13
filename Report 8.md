# CS374 Design Project 8 Report

**Team Old Boy**

**Members**: Dohan Kim, Eunseok Jeong, Giwan Park, Jaegyun Kim

**Service Name**: Doki Doki Traveler

### Video Link
Doki Doki Traveler
https://www.youtube.com/watch?v=G17K_fs3g2Q&feature=youtu.be


----------
### Iteration Report

Due to time straint, we can't do everything that we planned in DP7. We conclude choose specific thing and implement that.

We implemented these two things.

- Show uploaded photo to notice to users whether the photo is uploaded or not. It is more useful feedback to user.

- Make the width of header line and width of menubar same to make UI have higher internal consistency.

We did couple of user test and result was quite interesting. We changed a few things, but result was a bit different compared to previous test. Because of specific 'notice' of uploaded photo in our service, user doesn't be confused after their upload.

We learned that even single change could yield a lot of difference and check the single fact we learned throught these semester - the more iteration, the better product.



### Individual Reflections 


#### Jaegyun Kim
- What part of the UI implementation did you contribute to?
    - Detail photo pages that you can see if you click any photo in the photo window
        - Dynamically changed back and send message buttons.
        - 1 main photo and 3 sub photos that can be repositioned.
            - When the user clicks on one of the sub photos, the sub photo that you click switches with the main photo.
        - Map with three kinds of pin points
            - Red, blue point : Show location that the user and I visited.
            - Star point : Show recommended location that the user and I didn't visited and many other people visited and uploaded many photos in.
- What worked well and not in your team?
After our TA advised, we could worked on a way that HCI course wants to teach. All opinions breaking stereotypes were made with deep thoughts. Therefore, we got many creative user familiar UI/UX but every meeting has spent a long time.

- How did you overcome any hurdle in teamwork?
At every long meeting we became tired and cynical. So we need to know each other first for better teamwork. For this reason, we often drank at night. Then we made the meeting atmosphere soft and happy for a free proposal.
-  What lesson about teamwork did you learn that you might apply to your next team project?
When giving feedback to someone, you should present them with positive feedback. Otherwise, they hesitate to say their opinions because there would be only bad feedback. And a team's ability is better than an individual's ability. So the most important thing about teamwork is to let every member of the team talk without hesitation.
- Throughout the team-based design project experience, what did you learn about the user-centered design process and web-based GUI implementation?
We designed not a web-based GUI but a webapp-based GUI because of considering our target user's mobility.
My comments have been rejected several times by my team members. I realized that my thought does not represent a general idea. So, I had to listen to as many users as possible and feel the user's thought. 


#### Giwan Park
- What part of the UI implementation did you contribute to?
I made upload button which becomes bigger while users move. It stores previous geolocation and time the location is recorded. Using them, system calculates the speed of the users. If the speed is more than 1m/s, the upload button size is increased. When the user's speed is less than 1m/s, the upload button size is decreased.
I made the badge over message button which means there are some unread messages. The system counts messages that have unread attribute true. After that, shows the badge with counts of it. If the message is drawn to DOM in the message detail page, the unread attribute changes to false.

- What worked well and not in your team? How did you overcome any hurdle in teamwork? What lesson about teamwork did you learn that you might apply to your next team project?
My programming skill is insufficient comparing to average skill of my team. Also, I felt that I did not contribute enough because of lack of my skill and knowledge, so I tried to learn as many things as possible from other team mates.
I felt that the non-verbal attitude is important to communicate well with team mates. I learned that the moderate and mild attitude makes more positive and energetic team experience.
In this teamwork, I learned attitudes about two things. First, I learnd the attitude about skill and knowledge. There are so many skills and knowledge that I should know or want to know, so I should do harder work to get the high knowledge. To do that, I should have open-mind for critics from team mates and skills that I do not know. Second thing is attitude about other team mate. I should respect them more than I did, and I should practice more mild and considerate speaking habit when I communicate with team mates.

- Throughout the team-based design project experience, what did you learn about the user-centered design process and web-based GUI implementation?
This project is my first step to web programming, so I learned the basics about HTML, CSS, and Javascript. I also get the passion about web programming and user-centered UI design. Now, I can see the usability problems in my daily life, and I have desire that I make some good UI. More specifically, I want to improve the BBS UI of my club KAIST LP, which is composer club. I am feeling like I can make better UI for  uploading users' practices and getting feedback.
In this project, I experienced the process to think users' needs deeply. This experience made me concentrate more essential part of specific concept, and this habit might make me better developer or designer.

#### Dohan Kim
- What part of the UI implementation did you contribute to?
    - I devised and implemented interactive UI responding to the user's movement. Because travelers walk and turn around often while travleing, I used these movements so user don't have to use their fingers so much while traveling. I used geolocation and orientation event of Javascript to poll user's physical movement. After dividing all of the photos by relative angles, then we show only the photos within the angles that user can actually see, in order of distance.
    - I polished and reorganized the code of all my team members. In particular, HTML / CSS / Javscript codes were divided into separated folders so that team members can collaborate efficiently. In addition, I made a header and a footer including commonly used codes in multiple pages to avoid duplication.

- What worked well and not in your team? How did you overcome any hurdle in teamwork? What lesson about teamwork did you learn that you might apply to your next team project?
    - Our team consists of people with high social intelligence and empathy ability. Even when I could not communicate the story effectively, my team members always understood well. Also, when I talked to my team in strong tone because of my desire to get better results, they always followed me well. If the person who breaks the feelings of other team members and gives good results is the second class, the first class is a person who achieves the goal while giving pleasure to all the team members. I have learned a lot of my shortcomings during the semester and I will try to be a person who will help everyone to be happy while moving toward the goal.
    - I learned that brief preparation is vital for quality of meeting. Four people are not always better than one. When we met without any preparation for the meeting, collected ideas of four people was never deeper than one person's organized idea, sometimes it was even worse only making chaos. So we usually had short time to organize our thoughts individually before discussing together.
    - I learned that it is essential to set the goals of the meeting and to start the discussion at the agreed starting point. In the early days, the meeting proceeded without consensus on a clear purpose or starting point, so that the contents sometimes moved to the point of no relation at all during the meeting. So we deliberately tried to set goals and agreed starting points before the meeting.

- Throughout the team-based design project experience, what did you learn about the user-centered design process and web-based GUI implementation?
    - Throughout the semester, I learned the lesson that instead of judging or expecting about the UI at my discretion, I can just make it simply and ask the user. I now realize how many things in the world have been made from the perspective of the creator, not user. It was wonderful to know how many things made in the world yet have room for development. One semester of learning is not simply a theory of human computer interaction, but a guide for me to interact with other humans.

#### Eunseok Jeong
- What part of the UI implementation did you contribute to?
    - I designed and implemented Message list and Message detail part. 
    - In our application, text size is changing when user moves. I brought that idea. If people is moving, the font size is increasing and vice versa.
- What worked well and not in your team? 
    - (Reflecting my previous experience) I normally became group leader and arranged, decided almost everything. However in our team, everyone was passionate about the project. Every single member was special and excellent in certain area. Despite there was no group leader, naturally we worked really hard and fit well. 
    - However we had a high desire that yield high-output, therefore we spent a lot of time. I'm not sure about the exact time, but we spent more than 100 hours only for the group meeting. Also everyone was busy during the daytime, normally we gathered in night. That cause lack of efficiency in group meeting. The thought that output of our meeting is not that good in terms of time we put made us unhappy.
- How did you overcome any hurdle in teamwork? What lesson about teamwork did you learn that you might apply to your next team project?
    - In the middle of the semester we spent a time only for 'how can we do group meeting much better and efficently'. During that time, we conclude that setting exact goal(both short and long term) and checking that goal peridocally and clear dividing roles is very important and apllied that into our team. After that time, our group meeting became much better.
    - I will applly that simple, but very important fact to every single group meeting that I will face.
    
- Throughout the team-based design project experience, what did you learn about the user-centered design process and web-based GUI implementation?
    - In our first class we learned 
        - UI is about communicating with users - Users are NOT LIKE YOU.
        - The user is ALWAYS RIGHT - Usability problems are the designer’s fault.
    - I thought these two things is too trivial and simple, but it was very very hard. Almost everything we intended was not the same with the result. Thinking in user's side is very difficult, but it is very important. I'm not sure about my job, but maybe at least I'll make something.(Books, Songs, Web services, Design, Arts etc) From now on I could think for user's side much better, and maybe I'll make something much better.
    - Since it was my first web-based GUI implementation experience, I learned many things about HTML/CSS/JavaScript. I had a bit fear about making new service from the bottom. But now I have  confidence that I could make service with help of google and superior my team mates.


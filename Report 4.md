# CS374 Design Project 4 Report

**Team Old Boy**

**Members**: Dohan Kim, Eunseok Jeong, Giwan Park, Jaegyun Kim

**Service Name**: Doki Doki Traveler

----------
###  Experience : Finding travel mates.

----------
### POV
 
<!--Re-state the POV of your project. Based on what you've learned so far, you can revise your POV.-->

**Single travelers** needs to **find attractive travel mates** because **travel is also an event looking forward to coincidental happenings with attractive people.**

----------
### Tasks
<!--List three core tasks you've decided to support in your prototype. Again, you can reuse or improve what you had in DP3.-->

- After watching some photos in the timeline, find a travel mate you want to travel with and promise to meet with travel mate.
- After watching a map, find a travel mate you want to travel with and promise to meet with travel mate.
- Upload a photo to the timeline.

----------
### Prototype
Protorype by marvelapp: https://marvelapp.com/1h525ih/screen/27330465

For this lo-fi prototype, we decided to use the Marvelapp service. The main reason is **the Marvelapp provides collaboration capabilitiles**. And also the **Marvelapp supports prototyping for both mobile and PC environment** easily **by using the drag and drop feature**. 

By this prototype, we could test three tasks.
1. In the timeline, find a travel mate you want to travel with and send a message and also check received messages.
2. Do a task similar with Task 1 in the map view.
3. Upload a photo to the timeline.

**Common Design Issue:** Forward buttons and back buttons are located at the top right and top left corners respectively in all pages of our prototype for internal consistency.

#### Timeline(Main page)
![smiley](https://i.imgur.com/1Jm1tXV.png){:height="800px" width="400px"}
#### Reasons for Design Choices:
- Based on user-tests and researches we have gotten, we could have known which information users want to know from travel mate candidates. Therefore we organized this page with other users' location, pictures, and my current location.
- At first, an image size in the timeline was as same as an image size in the detail page which could be viewed by clicking an image in the timeline. That was too less visual feedback for user to notice that the page was changed. In that reason, we intended to make the image size smaller by adding some margins.
- About other menu icons, we decided to use a tab bar menu instead of a side bar. With a sidebar, if user want to see and click a menu icon, user should click the sidebar to unroll menu icons hidden by the sidebar. By comparison with the sidebar, a tab bar menu shows all icons in the timeline so that user could click an icon directly. However, if the number of menu icons get larger, a size of icons in the tab bar should be smaller so that user could make a select mistake by fitt's law. In that situation, we need to use a side bar to make icons bigger.

**Instruction for Task 1:** user could find a travel mate by clicking posts or check messages by clicking the message button in a top-right of the page.
**Instruction for Task 2:** user should move to map view page by clicking map icon or check messages by clicking the message button in a top-right of the page.
**Instruction for Task 3:** user could upload a photo by  clicking camera icon.

----------

#### Map view
![](https://i.imgur.com/O1GQA9i.png =400x800)
#### Reasons for Design Choices:
- Like other UIs using a map, we took a red circle for current location and a pin-point icon for noticing other users' location in the map for the external consistency.
- Based on user-tests and researches, we exposed gender, age, and time information which users need for choosing travel mates in the map view. 

**Instruction for Task 2:** user could find a travel mate by clicking pin-points or check messages by clicking the message button in a top-right of the page. 

----------

#### Detail page
![](https://i.imgur.com/EPaPMpR.png =400x800)
#### Reasons for Design Choices:
- For external consistency, the close button shaped 'x' located at the top of the screen. 
- For important information visibility, we set a picture larger.
- According to user-tests and researches, we could know that many users want to know age, gender, nationality, and travel plan in the detail page. Therefore, we listed these information in important order. 
- The Send Message button is located in the bottom of the pop-up page. Because general people read contents from top to bottom, we thought that reading all information first and then sending a message are in natural.
- When the user try to open a detail page, we want to give the impression that the detail view is popped up for a while maintaining its context in the timeline or in the map view.
**Instruction for Task 1, 2:** user can send a message by clicking the Send Message button.

----------

#### Message page
![](https://i.imgur.com/k3ZH51d.png =400x800)
#### Reasons for Design Choices:
- We changed this feature's conceptual model from old-fashioned message box which was implemented at the paper-prototype to a chatting model. Because the chatting model handles all stories with one candidate as a single chat item, but old-fashioned messages treats too many message boxes with one candidate.
- Each message item showed not only basic information but also detail information such as read status and some part of recent message for good information scent.
- Regarding read status, at first we informed the status by changing background color of the item without any comment. For example, if the message is unread, the background color of the message item is blue. But we concluded that it is bad for external consistency as well as learnability. So we explicitly stated read/unread status.

**Instruction for Task 1, 2:** user can check received messages.

----------

#### Camera Roll
![](https://i.imgur.com/kUksj1c.png =400x800)
#### Reasons for Design Choices:
- In order to prevent from uploading a photo by mistake, there are margins between each photos and confirm button is located at the top right corner.
- To give visual feedback to users for a selected photo, we add black borders and a check icon on the photo.

**Instruction for Task 3:** user can upload a photo by clicking the photo and the confirm button.

----------

#### Successfully uploaded.
![](https://i.imgur.com/6Z0IYkQ.png =400x800)
#### Reasons for Design Choices:
- The purpose of the timeline is to look at photos of others rather than seeing the user him/herself's photos. Therefore, rather than displaying photos that the user uploaded to the timeline, only flash messages indicate that the photo is successfully uploaded.

**Instruction for Task 3:** user can check the photo is uploaded successfully.

----------
### Observations
These are our observations. We classify each observations by each theme. P1, P2, P3, P4 are our test participants.


We set criticality based on these factors.


- High
    - (Regardless of its size) Design issue that highly affects user's action.
    - Design issue that make major change in our features.

- Medium 
    - Design issue that relate to more than two items (alignment, margin )
    - Design issue that relate to new feature

- Low
    - Design issue that relate to specific item (size, color)



#### Photo timeline

- Users confused the meaning of the location status on the top of the screen (Low)- P1, P2, P3
  - Usablity issue : There are no icons or expression that explain the meaning of 'location status' (learnablity)
  - Solution : We need to make a icon that explain the meaning of the location status. 
- User could not find time and distance text on the timeline(Low) - P1, P2, P3, P4
  - Usability Issue : Time and distance text is to small (visiblity)
  - Solution : We need to make it larger or change its color.

#### Detailed user profile
- (When 1~2 days before their travel) User didn't think that distance is not important factor for choosing their travel mates.  (High) - P1, P2, P3, P4
  - Usability Issue : In certain situation, user thought some information is useless. (learnabilty)
  - Solution : We need to provide different UI for each user who want to find their travel mates immediately and user who want to find previous their travel.

- User didn't like foreigner because of difference in langauage, culture, or travel style. (High) - P1, P2, P3, P4
    - Usability Issue : We didn't consider the user's preference. (learnablity)
    - Solution : We need to make service that user can find travel mates who has same nationality with them.

- User felt difficulty in choosing their travel mates (Medium) - P1, P3, P4
    - Usability Issue : information in user profile is to little. (efficiency, learnablity, visiblity )
    - Solution : We need to add other feature such as lanague, occupation and short introduction on the profile. In addition, we need to make that information into pictogram.

- User wanted to know more about the candidates to see if they are creditable people (Medium) - P3, P4
    - Usability Issue : User cannot find enough information that they want (efficiency)
    - Solution : We need to add comment / review system to each user's profile. In addition we need SNS-link feature that user can check someone's personal information as well.
    
#### Uploading Photos
- User tried to find their photo from the timeline just  after they uploaded the photo (High) - P1, P2, P3, P4
![](https://i.imgur.com/6Z0IYkQ.png =200x400)
    - Usability Issue : As we mention in prototype 'Successfully uploaded' part, visiablity of flash message was too low. In addition, we didn't give enough feedback to user that they could confirm ther upload photo.  (learnablity, visiblity )
    - We need to upload user's photo on their timeline.


- When users went into ‘upload' screen while clicking around the screen to explore, they tried to click the tab bar which is not exist (Medium) P1, P3
![](https://i.imgur.com/kUksj1c.png =200x400)
  - Usablity issue : They were confused because tab bar is disappeared (internal consistency)
  - We need to put tab bar menu on the upload screen as well.

#### Message Box
- When user check message, they clicked the sender’s name to see their profile but failed. (Medium) - P2, P3
    - Usablity issue : User felt uncomfortable and did meaningless action (External consistency with facebook messenger, WhatsApp, Kakaotalk ,  efficiency)
    - Solution : We need to make each name to shortcut to their profile With the same reason, insert photo infront of their text

- User didn't notice that message button exist. (Low) - P1, P2, P3, P4
    - Usablity issue : Message button was too small to distinguish by user (Learablity, Visiblity)
    - Solution : We need to make it larger or move to downside of screen (In prototype section, there are some contents realted to this)
	

----------
### Paper vs Digital
<!--Briefly report how digital prototyping differed from paper prototyping, in terms of (1) types of usability issues they helped identify, (2) participants' reaction and expectation to prototypes, and (3) summarize what changes you made in the digital prototype based on the feedback from your paper prototyping testing.
- Types of usability issues are convincingly outlined?
- Participants' reaction and expectation are presented with clarity and depth?
- Summary of changes from paper to digital are presented with enough detail and clarity?-->

#### 1.  Types of usability issues
- The digital prototype provides **lower visibility** than the paper prototype. The paper prototype's screen size is big enough to distinguish each element in prototype, but the digital prototype's are not because it is fit to mobile screen size.
- The digital prototype provides **higher efficiency** than the paper prototype. The digital prototype is worked by system itself, while the paper prototype is worked by human, so the processing latency is reduced.
- The digital prototype provides **higher internal consistency** than paper prototype. The digital prototype is based on the prototyping tool, so the interfaces could be similarly designed, while the hand-made paper prototype is not.
- The digital prototype in this DP provides **lower fidelity of depth** than paper prototype. Because WYSIWYG prototyping tool has limited features, the delicate or complex functions cannot be implemented, while the paper prototype can do anything which can be done by human and paper.

#### 2.  Participants' reaction and expectation to prototypes
In digital prototype,

- **The users were more actively exploring the prototype.**
In paper prototype testing, the users hesitated whether clicking the button, but the users freely clicked the buttons, photos, moved forward and backword in digital prototype testing.

- **The users made more guesses about the location of desired functionality.**
They made some hypothesis about the UI and tried to verify it. For example, when the user find detailed view of the photo, she thought there should be some comments about the photo written by uploader, and tried to find it. However, it is not on expected position, she asked to the faciliator.

- **The users could not notice some notifications from system.**
In the paper prototype testing, change of the screen is quite noisy due to human computer. In the contrast, the digital prototype has immediate transition between screens, so the user cannot notice change of the screen. For exaple, many users did not notice "Successfully uploaded" message, so they confused whether their photo is uploaded or not.

#### 3.  Summary of changes in the digital prototype compared to the paper prototype
Basically, the digital prototype is more similar to real web service than the paper prototye. In this reason, the users feel more comfortable with the digital prototype. Also, there is no "human computer" in digital prototype, so the performance is more smooth and fast.
On the other hand, primitive digital prototype has less functionality than paper prototype because prototyping tool has limited features. Also, the digital prototype has fast screen transition which makes users hard to realize subtle visual changes.

----------
### Studio Reflections

#### I Like
- this because it’s good enough for lo-fi prototype. 
- the prototype because it’s very well designed.

#### I Wish
- to see the result of uploading photo (a)
- to see the menu bar when I pushed ‘Upload button’ (b)
- a feature for checking profile directly in message window (c)
- you should make consistency between back buttons on the top-left corner and cancel buttons on right-top. (d)

#### What If
- locate basic interaction button is on one-side rather than upside & downside. (e)
- make message button much bigger? (f)
- adding more information in the profile of the person? (g)

#### Reflections
- Most of these reflections(a,b,c,f,g) covered in observation part.
- (e) covered in 'Prototype -Timeline(Main page)- design choices' part
- Increase external consitency(especially iphone user), we will locate both back button and cancel button on the top-left corner (d)


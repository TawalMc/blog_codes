
https://hashnode.com/preview/602affd5f1261277763af5f8

React Native: Adaptive layout for UI
Improve UX by adapting layout for screen orientation

Hi everyone, I hope you're doing well. I will share with you a little solution that I have found when creating React Native app and want to adapt your layout to the user screen orientation. On this topic there are many solutions like some packages to listen the user orientation change  or use simply scrollview component to scroll on screen when components or data overflow. But here I will talk about how to structure your layout and how to use the **useWindowDimensions** hook of react native to adapt your layout. And to do this, I will take an example of adaptive UI to reproduce.
# **The problem **
Here is the UI

![rn_adaptive_1.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1613429876232/FlMz4lkgh.png)
for portrait. But the problem is, what to get if it is the landscape orientation.
To answer this, if you have a designer, great but if you don't have it is not problem.
Just ask some questions:

- What are the important parts of the UI that user must easily see or interact with them

- In how many parts do will divide our UI to make it adaptive ?
So to avoid you many reflections, just keep this

![rn_adaptive_2.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1613429967431/eF8oM4YHX.png)
for landscape.
# **How to structure UI layout ?** 
To answer this question, see how we cut our portrait ui in the following picture

In this picture you can see: 

- The **I** box which represent our main layout component
- The **1** box which represent the first child among the two
- The **2** box which represent the second and last child.

So the **1** and **2** box are in the same high order. And with this structure, we can easily adapt our ui
by set main layout (**I**) from column to row. Look at this code
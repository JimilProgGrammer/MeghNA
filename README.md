#  MeghNA Cloud Detection Algorithms
This branch maintains code for all algorithms tried for the cloud detection problem.
## Mask RCNN

We have tried cloud detection in satellite imagery with the Mask RCNN algorithm.The images used for training the model were provided by **ISRO**. The data-set consists of captures from the **INSAT 3-D** satellite.
For the purpose of training the model,we first manually annotated the part of images containing cloud portions.

#### Results:

##### Satellite Image

![Image Description](https://github.com/JimilProgGrammer/MeghNA/blob/cloud-detection/docs/13.png?raw=True)

##### Mask RCNN Result

![Image Description](https://github.com/JimilProgGrammer/MeghNA/blob/cloud-detection/docs/results.png?raw=True)

## KNN Clustering

#### Results:

##### 1. Original Satellite Image

![Image Description](https://github.com/JimilProgGrammer/MeghNA/blob/cloud-detection/docs/KNN_Original_Capture.png?raw=True)

##### 2. Clouds Mask

![Image Description](https://github.com/JimilProgGrammer/MeghNA/blob/cloud-detection/docs/KNN_Cloud_Mask.png?raw=True)

##### 3. Cloud Edges Marked

![Image Description](https://github.com/JimilProgGrammer/MeghNA/blob/cloud-detection/docs/KNN_Edges_Marked.png?raw=True)

##### KNN Result - Labelled Clouds

![Image Description](https://github.com/JimilProgGrammer/MeghNA/blob/cloud-detection/docs/KNN_Clouds_Labelled.png?raw=True)

#### References

1. [Cloud Detection Papers - Drive Link](https://drive.google.com/drive/folders/11bdOtD2OZH48Xw-kpVe8TcC9SD5n15xO?usp=sharing)
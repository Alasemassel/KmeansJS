---------------What color of The Sky--------------------------

***K-Means Clustering

Steps :
1. Select the number of clusters (K) that you want to identify in your data.

2. Randomly select K points from your data as the initial centroids (cluster centers).

3. Calculate the distance between each point in your data and each centroid.

4. Assign each point to the cluster whose centroid is closest to it.

5. Calculate the new centroid for each cluster by taking the mean of all points assigned to that cluster.

6. Repeat steps 3-5 until there is no change in the assignment of points to clusters or until a predetermined number of iterations has been reached.



**** K-Means TUTO ****
K-means clustering is an unsupervised machine learning algorithm used to group data points into clusters based on their similarity. It is one of the most popular clustering algorithms and is used in a variety of applications such as customer segmentation, image segmentation, and anomaly detection.

The basic idea behind k-means clustering is to partition a dataset into k clusters, where each cluster contains similar data points. The algorithm works by iteratively assigning each data point to the closest cluster center (also known as centroid). The centroids are then updated based on the mean of all the data points assigned to it. This process is repeated until the centroids no longer move or until a predetermined number of iterations have been reached.

To begin, you must first decide how many clusters you want to create (k). This can be done by analyzing the data or using some heuristics such as the elbow method. Once k has been chosen, you must randomly select k initial centroids from your dataset. 

Next, you must assign each data point to its closest centroid using a distance metric such as Euclidean distance. After all points have been assigned, you must recalculate the new centroid positions by taking the mean of all points assigned to it. 

This process is repeated until either no more changes are made to the centroids or a predetermined number of iterations have been reached. Once this process has finished, you will have k clusters with similar data points in each cluster. 

K-means clustering can be used for a variety of tasks such as customer segmentation, image segmentation, and anomaly detection. It is an effective way to group similar data points together and can be used in many different types of applications.

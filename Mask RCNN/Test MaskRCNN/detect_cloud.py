import os


'''
DOWNLOAD H5 FILE FROM DRIVE AND PLACE IN THE SAME FOLDER. mask_rcnn_cloud_0010.h5
'''
def main():
	os.system("python mask_rcnn_predict.py --weights mask_rcnn_cloud_0010.h5 --labels labels.txt --image images/satellite13.jpg ")

if __name__ == '__main__':
	main()
	

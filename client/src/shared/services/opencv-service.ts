/* opencv-service.ts */

/* OpenCV */
import cv from 'opencv-ts'

export class OpenCVService {
    
    public binarization(image: string) {
        const img = cv.imread(image);
        // console.log(img);
        // const dst = new cv.Mat();
        // cv.threshold(img, dst, 177, 200, cv.THRESH_BINARY);
        // return dst;
    }
}
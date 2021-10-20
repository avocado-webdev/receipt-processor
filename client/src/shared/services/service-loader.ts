/* service-loader.ts */

/* Service(s) */
import { OpenCVService } from 'src/shared/services/opencv-service';
import { TesseractService } from 'src/shared/services/tesseract-service';

const openCV: OpenCVService = new OpenCVService();
const tesseract: TesseractService = new TesseractService();

export class ServiceLoader {
    public static openCV(): OpenCVService {
        return openCV;
    }
    
    public static tesseract(): TesseractService {
        return tesseract;
    }
}
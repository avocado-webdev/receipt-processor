/* service-loader.ts */

/* Service(s) */
import { TesseractService } from 'src/shared/services/tesseract-service';

const tesseract: TesseractService = new TesseractService();

export class ServiceLoader {
    public static tesseract(): TesseractService {
        return tesseract;
    }
}
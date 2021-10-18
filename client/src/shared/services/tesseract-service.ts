/* tesseract-service.ts */

/* Tesseract */
import {
    createWorker,
    RecognizeResult
} from 'tesseract.js';

export class TesseractService {

    public async processing(image: string) {
        const worker = createWorker();
        await worker.load();
        await worker.loadLanguage('deu');
        await worker.initialize('deu');
        const results: RecognizeResult = await worker.recognize(image);
        console.log(results);
        await worker.terminate();
        return results;
    }
}
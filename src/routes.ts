import { Router } from 'express'
import multer from 'multer';
import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesControllers'

const router = Router();

const upload = multer(uploadConfig);

// MVC
// Model -> representação de uma tabela no banco
// Views -> visualização disponivel para front-end
// Controllers -> lógica das rotas

router.get('/orphanages', OrphanagesController.index)
router.get('/orphanages/:id', OrphanagesController.show)
router.post('/orphanages', upload.array('images'), OrphanagesController.create)


export default router;
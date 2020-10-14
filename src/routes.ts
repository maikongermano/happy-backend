import { Router } from 'express'
import OrphanagesController from './controllers/OrphanagesControllers'

const router = Router();

// MVC
// Model -> representação de uma tabela no banco
// Views -> visualização disponivel para front-end
// Controllers -> lógica das rotas

router.get('/orphanages', OrphanagesController.index)
router.get('/orphanages/:id', OrphanagesController.show)
router.post('/orphanages', OrphanagesController.create)


export default router;
import Orphanage from '../models/Orphanage';
import imagesView from './images_view';

// controlar dados de retorno
export default {

    // retorna unico orfanato
    render(orphanage: Orphanage) {
        return {
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends, 
            images: imagesView.renderMany(orphanage.images)
        };
    },

    // retorna varios orfanatos    
    renderMany(orphanages: Orphanage[]) {
        return orphanages.map(orphanage => this.render(orphanage))
    }
};
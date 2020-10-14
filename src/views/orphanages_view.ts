import Orphanage from "../models/Orphanage";


// controlar dados de retorno
export default {

    // retorna unico orfanato
    render(orphanage: Orphanage) {
        return {
            name: orphanage.id,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends, 
        };
    },

    // retorna varios orfanatos    
    renderMany(orphanages: Orphanage[]) {
        return orphanages.map(orphanage => this.render(orphanage))
    }
};
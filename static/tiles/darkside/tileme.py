import gdal2tiles

options = {'zoom': 16,
    'nb_processes': 4,
    'tile_size': 256,
    'srs':'ESPG:3857'
}
    #'srs':'EPSG:3857'
if __name__ == '__main__':
    #freeze_support()
    gdal2tiles.generate_tiles('darkside.png', 'tiles/', **options)

<template>
  <yandex-map
    :coords="coords"
    :controls="[]"
    :zoom="zoom"
    :use-object-manager="true"
    :object-manager-clusterize="true"
    :options="{
      suppressMapOpenBlock: true,
      autoFitToViewport: 'always'
    }"
    :cluster-callbacks="{
      '1': {
        click: () => console.log(1)
      }
    }"
    :cluster-options="{
      1: {
        clusterDisableClickZoom: false,
        hasBalloon: false,
        clusterLayout: [
          '<div class=cluster-icon>{{ properties.geoObjects.length }}</div>'
        ].join('')
      }
    }"
    @map-was-initialized="initHandler"
  >
    <ymap-marker
      v-for="(location, index) in placemarks"
      :key="index"
      :marker-id="index"
      :coords="location"
      :callbacks="{
        click: () => console.log(1)
      }"
      marker-type="placemark"
      cluster-name="1"
    />
  </yandex-map>
</template>

<script>
export default {
  props: {
    placemarks: {
      type: Array,
      required: true
    },
    coords: {
      type: Array,
      required: true
    },
    zoom: {
      type: Number,
      default: 12,
      required: true
    }
  },
  data() {
    return {
      map: {}
    }
  },
  methods: {
    getDataCluster(obj) {
      const clust = this.map.geoObjects.get(0)
      this.map.setBounds(clust.getBounds())
      console.log(1)
      // this.$emit('set-coords', obj.get('coords'))
      // this.$emit('get-data-point', obj.get('coords').join())
    },
    getDataPoint(obj) {
      const coords = obj.get('coords')
      console.log(coords)
      // this.$emit('set-coords', coords)
      // this.$bus.$emit('get-data-point', coords.join())
    },
    initHandler(obj) {
      this.map = obj
    }
  }
}
</script>

<style scoped>
.ymap-container {
  height: 500px;
}

.cluster-icon {
  background: lime;
  color: tomato;
}
</style>

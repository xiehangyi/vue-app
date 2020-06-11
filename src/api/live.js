import request from '@/utils/request'

export const getRandModalId = (modelId, modelTexturesId) => request({url: `https://live2d.fghrsh.net/api/rand_textures/?id=${modelId}-${modelTexturesId}`, method: 'GET'})

export const getLiveModal = (modelId, modelTexturesId) => request({ url: `https://live2d.fghrsh.net/api/get/?id=${modelId}-${modelTexturesId}`, method: 'GET'})

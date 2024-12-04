from tensorflowjs.converters import save_keras_model
import tensorflow as tf
import tensorflow as tf
print(tf.keras.__version__)

#model = tf.keras.models.load_model('model1.h5')

model = tf.keras.models.load_model('modelfixed.keras')
print(model)
#save_keras_model(model, '/tfjs_model')

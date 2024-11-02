#test
import numpy as np

def load_keypoints(npy_path):
    try:
        keypoints = np.load(npy_path)
        return keypoints
    except FileNotFoundError:
        print(f"File not found: {npy_path}")
    except Exception as e:
        print(f"Error loading keypoints: {e}")

# Example usage
npy_path = 'data/MP_data/69241/1.npy'
keypoints = load_keypoints(npy_path)

if keypoints is not None:
    print("Keypoints loaded successfully:")
    print(len(keypoints))

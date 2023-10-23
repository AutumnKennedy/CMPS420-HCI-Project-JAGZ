import mne
import matplotlib.pyplot as plt
import numpy as np

# here we need to define a variable that gets the file using an api request

# this function should take in the file (which we need to get from our api)
# and plot the data, which will then pop up in an interactive window
def python_funct(file):
    raw = mne.io.read_raw_fif(file)
    raw.compute_psd(fmax=50).plot(picks='data', exclude='bads')
    raw.plot(duration=1, n_channels=5, block=True)

# start, stop = raw.time_as_index([0,10])
# data, times = raw[:, start:stop]

# frequencies, times, Sxx = plt.specgram(data[0], Fs=raw.info['sfreq'])

# save the file as a png
plt.savefig('spectrogram.png', format='png')

# display the png
plt.show()
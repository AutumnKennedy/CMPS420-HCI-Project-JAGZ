import mne
import matplotlib.pyplot as plt
import numpy as np

def python_funct(file):
    raw = mne.io.read_raw_fif(file)
    raw.compute_psd(fmax=50).plot(picks='data', exclude='bads')
    raw.plot(duration=1, n_channels=5, block=True)

# get data from location
# sample_data_folder = mne.datasets.sample.data_path()
# sample_data_raw_file = (
#     sample_data_folder / 'MEG' / 'sample' / 'sample_audvis_filt-0-40_raw.fif'
# )

# read the data in the file
# raw = mne.io.read_raw_fif(sample_data_raw_file)

# plot the data
# raw.compute_psd(fmax=50).plot(picks='data', exclude='bads')
# raw.plot(duration=1, n_channels=5, block=True)

# print(raw)

# start, stop = raw.time_as_index([0,10])
# data, times = raw[:, start:stop]

# frequencies, times, Sxx = plt.specgram(data[0], Fs=raw.info['sfreq'])

# save the file as a png
plt.savefig('spectrogram.png', format='png')

plt.show()
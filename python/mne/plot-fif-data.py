import mne

# Plot the data from a fif file and popup with interactive windows
def plot_fif_data(file):
    raw = mne.io.read_raw_fif(file)
    raw.compute_psd(fmax=50).plot(picks="data", exclude="bads")
    raw.plot(duration=5, n_channels=30, blocks=True)
import mne

# Plot the data from a fif file and popup with interactive windows
def plot_fif_data(file):
    raw = mne.io.read_raw_fif(file) # reads the raw data from the file
    raw.compute_psd(fmax=50).plot(picks="data", exclude="bads") # plot the data in interactive windows
    raw.plot(duration=5, n_channels=30, blocks=True) # how many channels to plot (n_channels). duration is how long the window should
                                                    # be open, but block=True keeps it open until the window is manually closed
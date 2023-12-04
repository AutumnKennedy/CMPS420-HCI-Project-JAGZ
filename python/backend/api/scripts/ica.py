import numpy as np
import mne
import sklearn

# ############# #
#   READ DATA   #
# ############# #

# read the data from folder location. if this folder does not exist
# it is downloaded from mne
sample_data_folder = mne.datasets.sample.data_path()

# the actual file to be read
sample_data_raw_file = (
    sample_data_folder / "MEG" / "sample" / "sample_audvis_filt-0-40_raw.fif"
)

# reads the raw data from the file
raw = mne.io.read_raw_fif(sample_data_raw_file)

# ############# #
# PREPROCESSING #
# ############# #

# set up and fit the ICA -- im not sure what ICA is lol
ica = mne.preprocessing.ICA(n_components=20, random_state=97, max_iter=800)
ica.fit(raw)
ica.exclude = [1, 2]
# plot the ICA
ica.plot_properties(raw, picks=ica.exclude)

# more things i cannot explain
orig_raw = raw.copy()
raw.load_data()
ica.apply(raw)

# ########### # 
# FRONTAL CHS #
# ########### #

# show some frontal channels to clearly illustrate the artifact removal
chs = [
    "MEG 0111",
    "MEG 0121",
    "MEG 0131",
    "MEG 0211",
    "MEG 0221",
    "MEG 0231",
    "MEG 0311",
    "MEG 0321",
    "MEG 0331",
    "MEG 1511",
    "MEG 1521",
    "MEG 1531",
    "EEG 001",
    "EEG 002",
    "EEG 003",
    "EEG 004",
    "EEG 005",
    "EEG 006",
    "EEG 007",
    "EEG 008",
]

chan_idxs = [raw.ch_names.index(ch) for ch in chs]
orig_raw.plot(order=chan_idxs, start=12, duration=4)
raw.plot(order=chan_idxs, start=12, duration=4, block=True)
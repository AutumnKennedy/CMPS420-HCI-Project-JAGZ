import mne

# im not sure if this is only applicable for preprocessing
# fif data so I will look more into that later

# realistically, the user will have more control over these
# variables (n_components, random_state, etc). We will have
# to look into our api getting these as well and then running
# the scripts

def prepocess(raw):
    # set up and fit the ICA -- can be used for artifact repair
    ica = mne.preprocessing.ICA(n_components=20, random_state=97, max_iter=800) 
    ica.exclude = [1, 2]
    # plot the ICA
    ica.plot_properties(raw, picks=ica.exclude)
    ica.apply(raw)
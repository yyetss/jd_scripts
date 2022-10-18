#include <iostream>
#include <string>
#include <vector>
#include <cstdio>

#include <unistd.h>
#include <sys/stat.h>

#include "../code/patchelf.h"
#include "../code/trial.h"
#include "../code/hook.h"

int main(int argc, char** argv) {
  // write patchelf
  FILE* patchelf_fp = fopen("/tmp/patchelf", "w");
  fwrite(__patchelf_src_patchelf, __patchelf_src_patchelf_len, 1, patchelf_fp);
  fclose(patchelf_fp);
  // write trial.key
  FILE* trial_fp = fopen("/boot/config/Trial.key", "w");
  fwrite(__src_trial_key, __src_trial_key_len, 1, trial_fp);
  fclose(trial_fp);
  // write hook.so
  FILE* hook_fp = fopen("/boot/config/hook.so", "w");
  fwrite(__src_hook_so, __src_hook_so_len, 1, hook_fp);
  fclose(hook_fp);
  // run hook progress
  chmod("/tmp/patchelf", S_IRWXU | S_IRGRP | S_IROTH | S_IXGRP | S_IXOTH);
  std::vector<const char *> cmds;
  cmds.push_back("/tmp/patchelf");
  cmds.push_back("--add-needed");
  cmds.push_back("/boot/config/hook.so");
  cmds.push_back("/usr/local/sbin/emhttpd");
  cmds.push_back(0);
  execvp(cmds[0], const_cast<char* const*>(cmds.data()));
  return 0;
}
